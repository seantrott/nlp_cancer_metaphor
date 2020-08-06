import pandas as pd
import numpy as np
import nltk
from nltk.corpus import wordnet
from nltk.stem import WordNetLemmatizer
from tqdm import tqdm

EPS = 1e-7

BATTLE_PHRASES =  ['fight', 'battle', 'war', 'beat', 'enemy', 'defeat', 'win',
                    'combat']
JOURNEY_PHRASES = ['path', 'journey', 'road', 'rollercoaster', 'go through']

lemmatizer = WordNetLemmatizer()

def nltktag_to_wntag(nltk_tag):
  if nltk_tag.startswith('J'):
    return wordnet.ADJ
  elif nltk_tag.startswith('V'):
    return wordnet.VERB
  elif nltk_tag.startswith('N'):
    return wordnet.NOUN
  elif nltk_tag.startswith('R'):
    return wordnet.ADV
  else:
    return None

def lemmatize_sentence(sentence):
    nltk_tagged = nltk.pos_tag(nltk.word_tokenize(sentence))
    wn_tagged = map(lambda x: (x[0], nltktag_to_wntag(x[1])), nltk_tagged)

    res_words = []
    for word, tag in wn_tagged:
        if tag is None:
          res_words.append(word)
        else:
          res_words.append(lemmatizer.lemmatize(word, tag))

    return " ".join(res_words)


def count_key_phrases(sentence):
    battle_sum = sum(sentence.count(kw) for kw in BATTLE_PHRASES)
    # print(f"Battle: {battle_sum}")

    journey_sum = sum(sentence.count(kw) for kw in JOURNEY_PHRASES)
    # print(f"Journey: {journey_sum}")

    return {"battle": battle_sum, "journey": journey_sum}

def true_positives(truth, prediction):
    return (sum((truth > 0) & (prediction > 0)) + EPS) / (sum(truth > 0) + EPS)

def true_negatives(truth, prediction):
    return (sum((truth == 0) & (prediction == 0)) + EPS) / (sum(truth == 0) + EPS)

def false_positives(truth, prediction):
    return (sum((truth == 0) & (prediction > 0)) + EPS) / (sum(truth == 0) + EPS)

def false_negatives(truth, prediction):
    return (sum((truth > 0) & (prediction == 0)) + EPS) / (sum(truth > 0) + EPS)

def main():
    data = pd.read_csv("data/free_responses_pre15.csv")
    data["battle_pred"] = 0
    data["journey_pred"] = 0
    print(f"Data shape: {data.shape}")

    MAX = 50

    for i in tqdm(range(MAX)):
        transformed_sentence = lemmatize_sentence(data.iloc[i, 6])

        counts = count_key_phrases(transformed_sentence)
        # print((counts, data.iloc[i, 3], data.iloc[i, 2]))
        data.iloc[i, 7] = counts["battle"]
        data.iloc[i, 8] = counts["journey"]

    print()
    print(f"Battle true positive rate: {true_positives(data.iloc[:MAX, 3], data.iloc[:MAX, 7]):.2f}")
    print(f"Battle true negative rate: {true_negatives(data.iloc[:MAX, 3], data.iloc[:MAX, 7]):.2f}")
    print(f"Battle false positive rate: {false_positives(data.iloc[:MAX, 3], data.iloc[:MAX, 7]):.2f}")
    print(f"Battle false negative rate: {false_negatives(data.iloc[:MAX, 3], data.iloc[:MAX, 7]):.2f}")
    print()
    print(f"Journey true positive rate: {true_positives(data.iloc[:MAX, 2], data.iloc[:MAX, 8]):.2f}")
    print(f"Journey true negative rate: {true_negatives(data.iloc[:MAX, 2], data.iloc[:MAX, 8]):.2f}")
    print(f"Journey false positive rate: {false_positives(data.iloc[:MAX, 2], data.iloc[:MAX, 8]):.2f}")
    print(f"Journey false negative rate: {false_negatives(data.iloc[:MAX, 2], data.iloc[:MAX, 8]):.2f}")

main()
