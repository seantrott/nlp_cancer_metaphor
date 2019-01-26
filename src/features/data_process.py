import pandas as pd
import numpy as np
import nltk
from nltk.tokenize import RegexpTokenizer
tokenizer = RegexpTokenizer(r'\w+')

# Create features related to metaphor usage in each project.
#
# *_metaphor: A count of how many (battle/journey)-related keywords were found in the project body text.
#
# *_uniques: A count of how many unique (battle/journey) keywords were found in the project body text.
#
# *_salience: A ratio of (battle/journey)-related keywords to total words in the project body text.
#
# *_productivity: TODO
#
# dominant_*: Boolean value if the dominant metaphor type used in the project body text was either battle, journey,
#   equal amount of both, or neither.


def get_parent_category(tag):
    if '/' in tag:
        return tag.split('/')[0]

    return tag


def merge_negligible_categories(cate):
    if cate == 'comics':
        return 'publishing'
    elif cate in ['design', 'art']:
        return 'design_art'
    elif cate in ['crafts', 'games']:
        return 'crafts_games'
    elif cate in ['dance', 'theater']:
        return 'dance_theater'

    return cate


def main():

    print('Processing Projects')

    labeled = pd.read_csv('data/processed/labeled_projects.csv')
    data = pd.read_csv('data/processed/cancer_projects.csv')

    data['usd_pledged'] = data['usd_pledged'].astype(float)

    data['mean_donation'] = data['usd_pledged'] / data['backers']
    data['mean_donation'] = data['mean_donation'].fillna(0)
    data['text_length_words'] = data['text'].apply(lambda t: len(tokenizer.tokenize(t)) if isinstance(t, str) else 0)
    data['text_length_sentences'] = data['text'].apply(
        lambda t: len(nltk.sent_tokenize(t)) if isinstance(t, str) else 0
    )
    data['pledged_to_goal'] = data['pledged'] / data['goal']
    data['duration'] = data['deadline'] - data['launched']
    data['duration_float'] = data['duration'] / (60 * 60 * 24)
    data['month'] = pd.to_datetime(data['launched'], unit='s').dt.month
    data['day_of_week'] = pd.to_datetime(data['launched'], unit='s').dt.dayofweek
    data['year'] = pd.to_datetime(data['launched'], unit='s').dt.year
    data['from_US'] = data['geo_country'].apply(lambda x: 1 if x == 'US' else 0)
    data['from_Town'] = data['geo_type'].apply(lambda x: 1 if x == 'Town' else 0)
    data['category'] = data['category'].apply(get_parent_category)
    data['category'] = data['category'].apply(merge_negligible_categories)
    data['blurb_length_words'] = data['blurb'].apply(lambda t: len(tokenizer.tokenize(t)) if isinstance(t, str) else 0)

    # keep only projects labeled as success or failure
    data = data[data['status'].isin(['successful', 'failed'])]
    data['status'] = data['status'].apply(lambda r: 1 if r == 'successful' else 0)

    # for every project ID, how many general keywords of type x were labeled for them?
    data['battle_metaphor'] = data['id'].apply(
        lambda ix: len(labeled.loc[(labeled['project_id'] == ix) & (labeled['type'] == 'battle')])
    )
    data['journey_metaphor'] = data['id'].apply(
        lambda ix: len(labeled.loc[(labeled['project_id'] == ix) & (labeled['type'] == 'journey')])
    )
    # for every project ID, how many specific keywords of type x were labeled for them?
    data['battle_uniques'] = data['id'].apply(
        lambda ix: len(set(labeled.loc[(labeled['project_id'] == ix) & (labeled['type'] == 'battle'), 'keyword']))
    )
    data['journey_uniques'] = data['id'].apply(
        lambda ix: len(set(labeled.loc[(labeled['project_id'] == ix) & (labeled['type'] == 'journey'), 'keyword']))
    )

    # see the comments at the top for a description on these variables
    data['battle_salience'] = data['battle_metaphor'] / data['text_length_words']
    data['journey_salience'] = data['journey_metaphor'] / data['text_length_words']

    data['first_instantiation'] = data['id'].apply(
        lambda ix: labeled[labeled['project_id'] == id, 'char_location'].values.min() / (len(data.loc[data['id'] == id, 'text'].values[0])+1)
    )

    # TODO: add productivity

    # division by zero (if say there's none of one type of metaphor) results in NA, just fill it with 0
    data = data.fillna(0)

    data['dominant_battle'] = np.array(data['battle_salience'] > data['journey_salience']).astype(int)
    data['dominant_journey'] = np.array(data['battle_salience'] < data['journey_salience']).astype(int)
    data['dominant_both'] = ((data['battle_salience'] == data['journey_salience']) & (
        data['battle_salience'] > 0)).astype(int)
    data['dominant_neither'] = ((data['battle_salience'] == data['journey_salience']) & (
        data['battle_salience'] == 0)).astype(int)

    # set a single column to denote the dominant metaphor based on the previous set four columns
    def merge(row):

        if row['dominant_both'] == 1:
            return 'Both'
        elif row['dominant_neither'] == 1:
            return 'Neither'
        elif row['dominant_battle'] == 1:
            return 'Battle'
        elif row['dominant_journey'] == 1:
            return 'Journey'

        return ''

    data['dominant'] = data.apply(merge, axis=1)

    data.to_csv('data/processed/cancer_projects_full.csv', index=False)
    print('Saved new features in data/processed/cancer_projects_full.csv')


if __name__ == '__main__':
    main()
