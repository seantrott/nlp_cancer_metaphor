import pandas as pd
import nltk
from nltk.tokenize import RegexpTokenizer
tokenizer = RegexpTokenizer(r'\w+')

def main():

    data = pd.read_csv('data/processed/cancer_projects.csv')

    data['mean_donation'] = data['usd_pledged'] / data['backers']
    data['text_length_chars'] = len(data['text'])
    data['text_length_words'] = data['text'].apply(lambda t: len(tokenizer.tokenize(t)))
    data['text_length_sentences'] = data['text'].apply(lambda t: len(nltk.sent_tokenize(t)))
    data['text_length_paragraphs'] = 0
    data['punctuation_count'] = 0
    data['metaphor'] = False #descriptor about metaphor presence
    data['first_metaphor_index'] = 0 # bin by quadrant or third
    data['pledged_to_goal'] = data['pledged'] / data['goal']
    data['duration'] = data['deadline'] - data['launched_at']
    data['month'] = ''
    data['day_of_week'] = ''
    data['year'] = ''
    data['from_US'] = data['geo_country'].apply(lambda x: True if x == 'US' else False)
    data['from_Town'] = data['geo_type'].apply(lambda x: True if x == 'Town' else False)
    data['category'] = ''
    data['blurb_length_words'] = 0

    # data.to_csv('data/processed/cancer_projects_f.csv')

if __name__ == '__main__':
    main()