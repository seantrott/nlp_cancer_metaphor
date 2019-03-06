import pandas as pd
import numpy as np
import hashlib
import re
from tqdm import tqdm
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


STATE_ABRV = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
              'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC',
              'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']


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


CANCER_TYPES = ["breast cancer", "lung cancer", "leukemia", "prostate cancer", "melanoma",
                 "lymphoma", "bone cancer", "skin cancer", "bladder cancer", "kidney cancer",
                 "brain cancer", "liver cancer", "pancreatic cancer", "testicular cancer",
                 "colon cancer", "cervical cancer", "esophageal cancer", "neuroblastoma"]


def get_cancer_type(text):
    ts = []

    if isinstance(text, float):
        return "unknown"

    for t in CANCER_TYPES:
        if t in text.lower():
            ts.append(t)

    if len(ts) == 0:
        return "general"
    elif len(ts) == 1:
        return ts[0]
    else:
        return "mixed"


def process_kickstarter():

    print('Processing Kickstarter Projects')

    pbar = tqdm(total=21)

    labeled = pd.read_csv('data/processed/labeled.csv')
    data = pd.read_csv('data/raw/kickstarter_projects.csv')
    pbar.update()

    data['id'] = data['url'].apply(lambda u: hashlib.md5(str.encode(u)).hexdigest())
    pbar.update()

    data['usd_pledged'] = data['usd_pledged'].astype(float)
    pbar.update()

    data['mean_donation'] = data['usd_pledged'] / data['backers']
    data['mean_donation'] = data['mean_donation'].fillna(0)
    pbar.update()
    data['text_length_words'] = data['text'].apply(lambda t: len(tokenizer.tokenize(t)) if isinstance(t, str) else 0)
    data['text_length_sentences'] = data['text'].apply(
        lambda t: len(nltk.sent_tokenize(t)) if isinstance(t, str) else 0
    )
    pbar.update()
    data['pledged_to_goal'] = data['pledged'] / data['goal']
    pbar.update()
    # data['duration'] = data['deadline'] - data['launched']
    data['duration_float'] = (data['deadline'] - data['launched']) / (60 * 60 * 24)
    pbar.update()
    data['month'] = pd.to_datetime(data['launched'], unit='s').dt.month
    data['day_of_week'] = pd.to_datetime(data['launched'], unit='s').dt.dayofweek
    data['year'] = pd.to_datetime(data['launched'], unit='s').dt.year
    pbar.update()
    data['from_US'] = data['geo_country'].apply(lambda x: 1 if x == 'US' else 0)
    data['from_Town'] = data['geo_type'].apply(lambda x: 1 if x == 'Town' else 0)
    pbar.update()
    data['category'] = data['category'].apply(get_parent_category)
    data['category'] = data['category'].apply(merge_negligible_categories)
    pbar.update()
    data['blurb_length_words'] = data['blurb'].apply(lambda t: len(tokenizer.tokenize(t)) if isinstance(t, str) else 0)
    pbar.update()
    data['cancer_type'] = data['text'].apply(get_cancer_type)
    pbar.update()
    data.drop('status_changed_at', axis=1, inplace=True)

    data['launched'] = pd.to_datetime(data['launched'], unit='s')
    data['deadline'] = pd.to_datetime(data['deadline'], unit='s')
    data['created'] = pd.to_datetime(data['created'], unit='s')
    pbar.update()

    # keep only projects labeled as success or failure
    data = data[data['status'].isin(['successful', 'failed'])]
    data['status'] = data['status'].apply(lambda r: 1 if r == 'successful' else 0)
    pbar.update()

    # for every project ID, how many general keywords of type x were labeled for them?
    data['battle_metaphor'] = data['id'].apply(
        lambda ix: len(labeled.loc[(labeled['project_id'] == ix) & (labeled['type'] == 'battle') & (labeled['metaphorical'] == True)])
    )
    pbar.update()
    data['journey_metaphor'] = data['id'].apply(
        lambda ix: len(labeled.loc[(labeled['project_id'] == ix) & (labeled['type'] == 'journey') & (labeled['metaphorical'] == True)])
    )
    pbar.update()
    # for every project ID, how many specific keywords of type x were labeled for them?
    data['battle_uniques'] = data['id'].apply(
        lambda ix: len(set(labeled.loc[(labeled['project_id'] == ix) & (labeled['type'] == 'battle') & (labeled['metaphorical'] == True), 'keyword']))
    )
    pbar.update()
    data['journey_uniques'] = data['id'].apply(
        lambda ix: len(set(labeled.loc[(labeled['project_id'] == ix) & (labeled['type'] == 'journey') & (labeled['metaphorical'] == True), 'keyword']))
    )
    pbar.update()

    # see the comments at the top for a description on these variables
    data['battle_salience'] = data['battle_metaphor'] / data['text_length_words']
    data['journey_salience'] = data['journey_metaphor'] / data['text_length_words']
    pbar.update()

    def first_instantiation(id):
        locs = labeled.loc[(labeled['project_id'] == id) & (labeled['metaphorical'] == True), 'char_location'].values
        if locs.any() and data.loc[data['id'] == id, 'text'].any():
            return locs.min() / (len(data.loc[data['id'] == id, 'text'].values[0]) + 1)

        return -1

    data['first_instantiation'] = data['id'].apply(first_instantiation)
    pbar.update()

    battle_vc = labeled.dropna().loc[(labeled['type'] == 'battle') & (labeled['metaphorical'] == True), 'keyword'].value_counts()
    journey_vc = labeled.dropna().loc[(labeled['type'] == 'journey') & (labeled['metaphorical'] == True), 'keyword'].value_counts()

    r = 0.4

    battle_freq_map = (sum(battle_vc) / battle_vc) ** r
    battle_freq_map = dict(battle_freq_map / min(battle_freq_map))

    journey_freq_map = (sum(journey_vc) / journey_vc) ** r
    journey_freq_map = dict(journey_freq_map / min(journey_freq_map))

    productivities = []

    # group by id
    for i, g in labeled.groupby('project_id'):
        # get the number of words total for the project text
        all_words = data.loc[data['id'] == i, 'text_length_words']

        # some (~20) projects don't have data on text body size... potential bug
        if all_words.size > 0 and all_words.values[0] > 0:

            kw = g.loc[g['type'] == 'battle', 'keyword'].value_counts()
            s = [battle_freq_map[k] * kw[k] for k in dict(kw) if k in battle_freq_map]
            battle_div = sum(s)

            kw = g.loc[g['type'] == 'journey', 'keyword'].value_counts()
            s = [journey_freq_map[k] * kw[k] for k in dict(kw)if k in journey_freq_map]
            journey_div = sum(s)

        else:
            battle_div, journey_div = 0.0, 0.0

        productivities.append([i, battle_div, journey_div])

    productivities = pd.DataFrame(productivities, columns=['id', 'battle_prod', 'journey_prod'])
    data = data.merge(productivities, how='left', on='id', validate='one_to_one')

    data['battle_prod'] = data['battle_prod'].fillna(0)
    data['journey_prod'] = data['journey_prod'].fillna(0)

    pbar.update()

    # division by zero (if say there's none of one type of metaphor) results in NA, just fill it with 0
    data = data.fillna(0)

    # data['dominant_battle'] = np.array(data['battle_salience'] > data['journey_salience']).astype(int)
    # data['dominant_journey'] = np.array(data['battle_salience'] < data['journey_salience']).astype(int)
    # data['dominant_both'] = ((data['battle_salience'] == data['journey_salience']) & (
    #         data['battle_salience'] > 0)).astype(int)
    # data['dominant_neither'] = ((data['battle_salience'] == data['journey_salience']) & (
    #         data['battle_salience'] == 0)).astype(int)
    # pbar.update()
    #
    # # set a single column to denote the dominant metaphor based on the previous set four columns
    # def merge(row):
    #
    #     if row['dominant_both'] == 1:
    #         return 'Both'
    #     elif row['dominant_neither'] == 1:
    #         return 'Neither'
    #     elif row['dominant_battle'] == 1:
    #         return 'Battle'
    #     elif row['dominant_journey'] == 1:
    #         return 'Journey'
    #
    #     return 'Unknown'
    #
    # data['dominant'] = data.apply(merge, axis=1)
    # pbar.update()

    data['source'] = 'kickstarter'

    data.to_csv('data/processed/kickstarter_projects.csv', index=False)
    pbar.close()
    print('Saved new features in data/processed/kickstarter_projects.csv')

    return data

def process_gofundme():

    print('Processing GoFundMe Projects')

    pbar = tqdm(total=19)

    hour = re.compile(r'^(\d{1,2}) hour(?:s?)$')
    day = re.compile(r'^(\d{1,2}) day(?:s?)$')
    month = re.compile(r'^(\d{1,2}) month(?:s?)$')

    def durtnum(dur):
        hour_s = hour.search(dur)
        if hour_s:
            return float(hour_s.group(1)) / 24

        day_s = day.search(dur)
        if day_s:
            return int(day_s.group(1))

        month_s = month.search(dur)
        if month_s:
            return int(month_s.group(1)) * 30

        return np.nan

    labeled = pd.read_csv('data/processed/labeled.csv')
    data = pd.read_csv('data/raw/gofundme_projects.csv').dropna()
    pbar.update()

    data['id'] = data['url'].apply(lambda u: hashlib.md5(str.encode(u)).hexdigest())
    pbar.update()

    data['usd_pledged'] = data['usd_pledged'].astype(float)
    pbar.update()

    data['mean_donation'] = data['usd_pledged'] / data['backers']
    data['mean_donation'] = data['mean_donation'].fillna(0)
    pbar.update()

    data['text_length_words'] = data['text'].apply(lambda t: len(tokenizer.tokenize(t)) if isinstance(t, str) else 0)
    data['text_length_sentences'] = data['text'].apply(
        lambda t: len(nltk.sent_tokenize(t)) if isinstance(t, str) else 0
    )
    pbar.update()
    data['pledged_to_goal'] = data['usd_pledged'] / data['goal']
    pbar.update()
    data['launched'] = pd.to_datetime(data['launched'], infer_datetime_format=True)
    pbar.update()
    # data['duration'] = data['duration'].apply(durtnum)
    data['duration_float'] = data['duration'].apply(durtnum)
    data.drop('duration', axis=1, inplace=True)
    pbar.update()
    data['day_of_week'] = pd.to_datetime(data['launched'], infer_datetime_format=True).dt.dayofweek
    pbar.update()
    data['from_US'] = data['location'].apply(lambda loc: 1 if set(loc.split()) & set(STATE_ABRV) else 0)
    data.drop('location', axis=1, inplace=True)
    pbar.update()
    data['cancer_type'] = data['text'].apply(get_cancer_type)
    pbar.update()
    # data['from_Town'] = np.nan
    # data['category'] = np.nan
    # data['category'] = data['category'].apply(merge_negligible_categories)
    # data['blurb_length_words'] = np.nan

    data['status'] = data['pledged_to_goal'].apply(lambda ptg: 1 if ptg >= 1.0 else 0)
    pbar.update()

    # for every project ID, how many general keywords of type x were labeled for them?
    data['battle_metaphor'] = data['id'].apply(
        lambda ix: len(labeled.loc[(labeled['project_id'] == ix) & (labeled['type'] == 'battle') & (labeled['metaphorical'] == True)])
    )
    pbar.update()
    data['journey_metaphor'] = data['id'].apply(
        lambda ix: len(labeled.loc[(labeled['project_id'] == ix) & (labeled['type'] == 'journey') & (labeled['metaphorical'] == True)])
    )
    pbar.update()
    # for every project ID, how many specific keywords of type x were labeled for them?
    data['battle_uniques'] = data['id'].apply(
        lambda ix: len(set(labeled.loc[(labeled['project_id'] == ix) & (labeled['type'] == 'battle') & (labeled['metaphorical'] == True), 'keyword']))
    )
    pbar.update()
    data['journey_uniques'] = data['id'].apply(
        lambda ix: len(set(labeled.loc[(labeled['project_id'] == ix) & (labeled['type'] == 'journey') & (labeled['metaphorical'] == True), 'keyword']))
    )
    pbar.update()

    # see the comments at the top for a description on these variables
    data['battle_salience'] = data['battle_metaphor'] / data['text_length_words']
    data['journey_salience'] = data['journey_metaphor'] / data['text_length_words']
    pbar.update()

    def first_instantiation(id):
        locs = labeled.loc[(labeled['project_id'] == id) & (labeled['metaphorical'] == True), 'char_location'].values
        if locs.any() and data.loc[data['id'] == id, 'text'].any():
            return locs.min() / (len(data.loc[data['id'] == id, 'text'].values[0]) + 1)

        return -1

    data['first_instantiation'] = data['id'].apply(first_instantiation)
    pbar.update()

    battle_vc = labeled.dropna().loc[(labeled['type'] == 'battle') & (labeled['metaphorical'] == True), 'keyword'].value_counts()
    journey_vc = labeled.dropna().loc[(labeled['type'] == 'journey') & (labeled['metaphorical'] == True), 'keyword'].value_counts()

    r = 0.4

    battle_freq_map = (sum(battle_vc) / battle_vc) ** r
    battle_freq_map = dict(battle_freq_map / min(battle_freq_map))

    journey_freq_map = (sum(journey_vc) / journey_vc) ** r
    journey_freq_map = dict(journey_freq_map / min(journey_freq_map))

    productivities = []

    # group by id
    for i, g in labeled.loc[labeled['metaphorical'] == True].groupby('project_id'):
        # get the number of words total for the project text
        all_words = data.loc[data['id'] == i, 'text_length_words']

        # some (~20) projects don't have data on text body size... potential bug
        if all_words.size > 0 and all_words.values[0] > 0:

            kw = g.loc[g['type'] == 'battle', 'keyword'].value_counts()
            s = [battle_freq_map[k] * kw[k] for k in dict(kw) if k in battle_freq_map]
            battle_div = sum(s)

            kw = g.loc[g['type'] == 'journey', 'keyword'].value_counts()
            s = [journey_freq_map[k] * kw[k] for k in dict(kw) if k in journey_freq_map]
            journey_div = sum(s)

        else:
            battle_div, journey_div = 0.0, 0.0

        productivities.append([i, battle_div, journey_div])

    productivities = pd.DataFrame(productivities, columns=['id', 'battle_prod', 'journey_prod'])
    data = data.merge(productivities, how='left', on='id', validate='one_to_one')

    data['battle_prod'] = data['battle_prod'].fillna(0)
    data['journey_prod'] = data['journey_prod'].fillna(0)

    pbar.update()

    # division by zero (if say there's none of one type of metaphor) results in NA, just fill it with 0
    # data = data.fillna(0)

    data = data.loc[data['id'].isin(labeled['project_id'])]

    # data['dominant_battle'] = np.array(data['battle_salience'] > data['journey_salience']).astype(int)
    # data['dominant_journey'] = np.array(data['battle_salience'] < data['journey_salience']).astype(int)
    # data['dominant_both'] = ((data['battle_salience'] == data['journey_salience']) & (
    #         data['battle_salience'] > 0)).astype(int)
    # data['dominant_neither'] = ((data['battle_salience'] == data['journey_salience']) & (
    #         data['battle_salience'] == 0)).astype(int)
    # pbar.update()
    #
    # # set a single column to denote the dominant metaphor based on the previous set four columns
    # def merge(row):
    #
    #     if row['dominant_both'] == 1:
    #         return 'Both'
    #     elif row['dominant_neither'] == 1:
    #         return 'Neither'
    #     elif row['dominant_battle'] == 1:
    #         return 'Battle'
    #     elif row['dominant_journey'] == 1:
    #         return 'Journey'
    #
    #     return 'Unknown'
    #
    # data['dominant'] = data.apply(merge, axis=1)
    # pbar.update()

    data['source'] = 'gofundme'

    data.to_csv('data/processed/gofundme_projects.csv', index=False)
    pbar.close()
    print('Saved new features in data/processed/gofundme_projects.csv')

    return data

def main():

    kickstarter_projs = process_kickstarter()
    gofundme_projs = process_gofundme()

    combined_projs = pd.concat([kickstarter_projs, gofundme_projs], axis=0, ignore_index=True, sort=False)

    combined_projs.to_csv('data/processed/combined_projects.csv', index=False)
    print('Projects Combined into data/processed/combined_projects.csv')


if __name__ == '__main__':
    main()
