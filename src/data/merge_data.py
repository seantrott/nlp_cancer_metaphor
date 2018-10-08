import os.path as op
import pandas as pd 
import json

DATA_PROCESSED = 'data/processed'


def main():
	with open(op.join(DATA_PROCESSED, 'cancer_project_text.json'), 'r') as f:
	    text_data = json.load(f)

	with open(op.join(DATA_PROCESSED, 'cancer_project_data.json'), 'r') as f:
	    json_data = json.load(f)

	# Load text data
	text_data_df = pd.DataFrame.from_dict({'id': list(text_data.keys()), 'text': list(text_data.values())})
	# Make sure ID is in correct format
	text_data_df['id'] = pd.to_numeric(text_data_df['id'])

	# Load campaign data
	campaign_data = pd.DataFrame(json_data)
	campaign_data = campaign_data.drop_duplicates(subset='id')
	campaign_data = campaign_data[campaign_data['id'].isin(list(text_data.keys()))]

	# Merge
	combined = pd.merge(campaign_data, text_data_df, on="id")

	# Save
	combined.to_csv("data/processed/kickstarter_plus_text.csv")


if __name__ == "__main__":
	main()