import pandas as pd
import nltk
from nltk.tokenize import RegexpTokenizer
tokenizer = RegexpTokenizer(r'\w+')


def get_parent_category(tag):
    if '/' in tag:
        return tag.split('/')[0]

    return tag

def main():

    print('Processing Projects')

    data = pd.read_csv('data/processed/cancer_projects.csv')

    data['usd_pledged'] = data['usd_pledged'].astype(float)
    data['deadline'] = pd.to_datetime(data['deadline'], unit='s')
    data['created'] = pd.to_datetime(data['created'], unit='s')
    data['launched'] = pd.to_datetime(data['launched'], unit='s')

    data['mean_donation'] = data['usd_pledged'] / data['backers']
    data['mean_donation'] = data['mean_donation'].fillna(0)
    data['text_length_chars'] = data['text'].apply(lambda t: len(t) if isinstance(t, str) else 0)
    data['text_length_words'] = data['text'].apply(lambda t: len(tokenizer.tokenize(t)) if isinstance(t, str) else 0)
    data['text_length_sentences'] = data['text'].apply(lambda t: len(nltk.sent_tokenize(t)) if isinstance(t, str) else 0)
    # data['metaphor'] = False
    # data['first_metaphor_index'] = 0
    data['pledged_to_goal'] = data['pledged'] / data['goal']
    data['duration'] = data['deadline'] - data['launched']
    data['month'] = data['launched'].dt.month
    data['day_of_week'] = data['launched'].dt.dayofweek
    data['year'] = data['launched'].dt.year
    data['from_US'] = data['geo_country'].apply(lambda x: 1 if x == 'US' else 0)
    data['from_Town'] = data['geo_type'].apply(lambda x: 1 if x == 'Town' else 0)
    data['category'] = data['category'].apply(get_parent_category)
    data['blurb_length_words'] = data['blurb'].apply(lambda t: len(tokenizer.tokenize(t)) if isinstance(t, str) else 0)

    data.to_csv('data/processed/cancer_projects_full.csv', index=False)

    print('Saved new features in data/processed/cancer_projects_full.csv')

if __name__ == '__main__':
    main()