import pandas as pd
import numpy as np
import re
from tqdm import tqdm
import spacy
from unicodedata import normalize # https://docs.python.org/2/library/unicodedata.html#unicodedata.normalize

nlp = spacy.load('en_core_web_sm')

BATTLE_WORDS = ['fights', 'fighting', 'fight', 'fought', 'battles', 'battled', 'battling', 'battle', 'war', 'beating', 'beats', 'beaten', 'beat', 'enemy', 'brutal', 'defeat', 'winning', 'win']

JOURNEY_WORDS = ['path', 'journey', 'destination']


def find_keywords(text, source, source_type):
    '''
    Search `text` for all instances of keywords in `source`.
    '''
    if not isinstance(text, float):
        sentences = [s for s in nlp(text).sents]
        for ix, sentence in enumerate(sentences):
            for kw in source:
                exp = r'\W(' + kw + ')\W'
                for kw_match in re.finditer(exp, sentence.text.lower()):

                    if len(sentences) > 0 and ix > 0:
                        before = sentences[ix - 1].text
                    else:
                        before = ''

                    if len(sentences) > 0 and ix + 1 < len(sentences):
                        next_ = sentences[ix + 1].text
                    else:
                        next_ = ''

                    current = sentences[ix].text

                    yield {'before': before,
                           'current': current,
                           'next': next_,
                           'start': kw_match.start() + 1,
                           'end':  kw_match.end() - 1,
                           'type': source_type,
                           'keyword': kw}

def remove_hyperlinks(text):
    """Remove hyperlinks from text."""
    endings = [r'\.com', r'\.org', r'\.edu', r'\.net', r'\.gov', r'\.eu', r'\.us']
    substitution = r'http\S+|ftp\S+|www\.\S+'
    for end in endings:
        substitution += r'|\S+{r}'.format(r=end)
    return re.sub(substitution, '<LINK>', text)


def normalize_spacing(text):
    """If punctuation is followed by non-whitespace character, insert space."""
    text = re.sub(r'\.(?=[^ \W\d])', '. ', text)
    text = re.sub(r'\!(?=[^ \W\d])', '! ', text)
    text = re.sub(r'\?(?=[^ \W\d])', '? ', text)
    text = re.sub(r'\,(?=[^ \W\d])', ', ', text)

    text = text.replace('\n', ' ')
    text = text.replace('\t', ' ')
    text = normalize('NFKD', text)

    return text.strip()

def remove_NEs(text):

    text_list = list(text)

    doc = nlp(text)

    for ent in doc.ents:
        if ent.label_ in ['PERSON', 'ORG', 'FAC', 'GPE', 'PRODUCT', 'WORK_OF_ART']:
            for char in range(ent.start_char, ent.end_char):
                text_list[char] = '#'

    return ''.join(text_list)


def main():
    print('Beginning Text Cleaning')
    projects = pd.read_csv('data/processed/combined_projects.csv', nrows=1000)

    texts = []

    for text in tqdm(projects['text'].values):
        if isinstance(text, str):
            texts.append(remove_NEs(normalize_spacing(remove_hyperlinks(text))))
        else:
            texts.append('')

    projects['text'] = texts

    projects = projects[['id', 'text', 'url']]

    print('Completed Text Cleaning')
    print('Beginning Sample Compilation')

    compiled = []

    for project in tqdm(list(projects.itertuples())):
        for source, key in [(BATTLE_WORDS, 'battle'), (JOURNEY_WORDS, 'journey')]:
            for result in find_keywords(project.text, source, key):
                result['project'] = project.id

                compiled.append(result)

    compiled = pd.DataFrame(compiled).sample(frac=1)

    print('Completed Sample Compilation')

    compiled.to_csv('data/processed/mturk_samples.csv', index_label='sample_id')


if __name__ == '__main__':
    main()