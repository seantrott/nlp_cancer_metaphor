import os.path as op

import pandas as pd
import numpy as np

DATA_PROCESSED = '../../data/processed'


def main():
    # projects without any metaphor features
    all_projects = pd.read_csv(op.join(DATA_PROCESSED, 'combined_projects.csv'))

    # fragments that have been labeled for metaphoricity
    labeled = pd.read_csv(op.join(DATA_PROCESSED, 'labeled.csv'))

    projects = all_projects.loc[all_projects["source"] == "gofundme"]
    labeled = labeled.loc[labeled["project_id"].isin(projects["id"])].dropna()

    print(f'GFM Projects DF: {len(projects):,}')
    print(f'Labeled Keywords DF: {len(labeled):,}')

    fetch = int(input("How many to fetch? "))
    print()

    corrections = 0

    for i in range(fetch):
        sample = labeled.sample()

        id = sample["project_id"].values[0]
        fragment = sample["fragment"].values[0]
        char_location = int(sample["char_location"].values[0])
        metaphorical = sample["metaphorical"].values[0]

        project = projects.loc[projects["id"] == id, ]

        print(f'{id} {project["name"].values[0]}')
        print(fragment)
        met = input("Metaphorical? ")

        if met == "c":
            text = project["text"].values[0]
            print(text[max(char_location - 300, 0):min(char_location + 300, len(text))])
            met = input("Metaphorical? ")

        met = True if met == "y" else False

        if met != metaphorical:
            print(f"Correction to be made {id[:10]} - {char_location}")
            corrections += 1

        print()

    print(f"Total corrections: {corrections}")

if __name__ == '__main__':
    main()
