"""Extract metaphors from labeled campaigns."""

import os.path as op
import pandas as pd


DATA_PROCESSED = 'data/processed'
labeled = pd.read_csv(op.join(DATA_PROCESSED, 'labeled_projects.csv'))
all_projects = pd.read_csv(op.join(DATA_PROCESSED, 'cancer_projects_full.csv'))


all_projects['battle_metaphor'] = all_projects['id'].apply(
    lambda ix: len(labeled.loc[(labeled['project_id'] == ix) & (labeled['type'] == 'battle')])
)
all_projects['journey_metaphor'] = all_projects['id'].apply(
    lambda ix: len(labeled.loc[(labeled['project_id'] == ix) & (labeled['type'] == 'journey')])
)
all_projects['battle_uniques'] = all_projects['id'].apply(
    lambda ix: len(set(labeled.loc[(labeled['project_id'] == ix) & (labeled['type'] == 'battle'), 'keyword']))
)
all_projects['journey_uniques'] = all_projects['id'].apply(
    lambda ix: len(set(labeled.loc[(labeled['project_id'] == ix) & (labeled['type'] == 'journey'), 'keyword']))
)

all_projects['battle_salience'] = all_projects['battle_metaphor'] / all_projects['text_length_words']
all_projects['journey_salience'] = all_projects['journey_metaphor'] / all_projects['text_length_words']

all_projects['battle_productivity'] = all_projects['battle_uniques'] / all_projects['battle_metaphor']
all_projects['journey_productivity'] = all_projects['journey_uniques'] / all_projects['journey_metaphor']

all_projects = all_projects.fillna(0)

all_projects['dominant_battle'] = (all_projects['battle_salience'] > all_projects['journey_salience']).astype(int)
all_projects['dominant_journey'] = (all_projects['battle_salience'] < all_projects['journey_salience']).astype(int)
all_projects['dominant_both'] = ((all_projects['battle_salience'] == all_projects['journey_salience']) & (all_projects['battle_salience'] > 0)).astype(int)
all_projects['dominant_neither'] = ((all_projects['battle_salience'] == all_projects['journey_salience']) & (all_projects['battle_salience'] == 0)).astype(int)


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

all_projects['dominant'] = all_projects.apply(merge, axis=1)
all_projects.to_csv("data/processed/projects_with_metaphors.csv")