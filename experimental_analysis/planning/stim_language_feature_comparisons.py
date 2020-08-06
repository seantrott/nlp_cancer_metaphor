import pandas as pd
import numpy as np
import re
from tqdm import tqdm
import nltk
from nltk.tokenize import RegexpTokenizer
tokenizer = RegexpTokenizer(r'\w+')


STATE_ABRV = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
              'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC',
              'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']

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


def process():

    print('Processing Custom Campaigns')

    pbar = tqdm(total=7)


    labeled = pd.read_csv('src/reports/labeled.csv')
    data = pd.read_csv('src/reports/projects.csv').dropna()
    pbar.update()


    data = data[data['text'].apply(lambda t: isinstance(t, str))]
    data['text_length_words'] = data['text'].apply(lambda t: len(tokenizer.tokenize(t)))
    data = data[data['text_length_words'] > 0]
    data['text_length_sentences'] = data['text'].apply(
        lambda t: len(nltk.sent_tokenize(t)) if isinstance(t, str) else 0
    )
    pbar.update()

    data['cancer_type'] = data['text'].apply(get_cancer_type)
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

    # compute frequency maps
    battle_freq_map = {'fight': 1.0, 'battle': 1.229309058385031, 'fighting': 1.4433547113246208, 'beat': 1.6808340642450945,
                       'battling': 2.018335910271837, 'fought': 2.7364998999363457, 'win': 2.8997138919783882,
                       'beating': 3.203988429843257, 'fights': 3.2936407590817542, 'battled': 3.826195419443541,
                       'battles': 3.8875031114215752, 'defeat': 4.786106595452348, 'beaten': 5.578467864788623,
                       'winning': 6.099285194071219, 'war': 6.315305514501698, 'beats': 7.001383536030607,
                       'enemy': 8.04805506363696}

    journey_freq_map = {'journey': 1.0, 'path': 2.67308106226671, 'road': 3, 'travel': 3.5}

    productivities = []

    # group by id
    for i, g in labeled.loc[labeled['metaphorical'] == True].groupby('project_id'):

        kw = g.loc[g['type'] == 'battle', 'keyword'].value_counts()
        s = [battle_freq_map[k] * kw[k] for k in dict(kw) if k in battle_freq_map]
        battle_div = sum(s) / kw.sum() if len(kw) > 0 else 0

        kw = g.loc[g['type'] == 'journey', 'keyword'].value_counts()
        s = [journey_freq_map[k] * kw[k] for k in dict(kw) if k in journey_freq_map]
        journey_div = sum(s) / kw.sum() if len(kw) > 0 else 0

        productivities.append([i, battle_div, journey_div])

    productivities = pd.DataFrame(productivities, columns=['id', 'battle_prod', 'journey_prod'])
    data = data.merge(productivities, how='left', on='id', validate='one_to_one')

    data['battle_prod'] = data['battle_prod'].fillna(0)
    data['journey_prod'] = data['journey_prod'].fillna(0)

    pbar.update()

    data['text'] = ""

    data.to_csv('src/reports/projects_full.csv', index=False)
    pbar.close()

if __name__ == '__main__':
    process()