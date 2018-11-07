"""Extract features from campaign text.

To do:
* Text cleaning?
* Also extract the *position* of a metaphor (first third, second third, etc.)
"""

import nltk
import operator
import pandas as pd

from tqdm import tqdm


BATTLE_WORDS = ['fight', 'battle', 'war']
JOURNEY_WORDS = ['path', 'journey', 'destination']
METAPHORS = {'battle': BATTLE_WORDS,
             'journey': JOURNEY_WORDS}

DATA_PATH = "data/processed/cancer_projects_full.csv"


def concept_salience(text_block, keywords):
    """Identify salience of a given concept in text block using keywords."""
    words = nltk.word_tokenize(text_block)
    if len(words) == 0:
        return 0.0
    overlap = [w for w in words if w in keywords]
    return len(overlap) / len(words)


def extract_features_from_campaign(campaign_text):
    """Extract relevant text features from text block."""
    num_sentences = len(nltk.sent_tokenize(campaign_text))
    num_words = len(nltk.word_tokenize(campaign_text))

    battle_salience = concept_salience(campaign_text, BATTLE_WORDS)
    journey_salience = concept_salience(campaign_text, JOURNEY_WORDS)

    if battle_salience == 0 and journey_salience == 0:
        dominant_metaphor = "neither"
    elif battle_salience == journey_salience:
        dominant_metaphor = "both"
    else:
        mapping = {'battle': battle_salience,
                   'journey': journey_salience}
        dominant_metaphor = max(mapping.items(),
                                key=operator.itemgetter(1))[0]

    return {'num_sentences': num_sentences,
            'num_words': num_words,
            'battle_salience': battle_salience,
            'journey_salience': journey_salience,
            'dominant_metaphor': dominant_metaphor}


def extract_features_from_blocks(text_blocks):
    """Extract features from text blocks."""
    features = []
    for tb in tqdm(text_blocks):
        features.append(extract_features_from_campaign(tb))

    return pd.DataFrame.from_dict(features)


def main(data_path):
    """Extract all text features for each campaign."""
    df = pd.read_csv(data_path)
    df = df.dropna()

    df_with_features = df.join(extract_features_from_blocks(df['text']))

    df_with_features.to_csv("data/processed/kickstarter_plus_metaphor.csv")




if __name__ == "__main__":
    main(DATA_PATH)