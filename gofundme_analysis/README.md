# Structure

## `/data/processed`

Processed data files

## `/data/raw`

Raw data files

## `/exploration`

Jupyter Notebooks for exploring the observational data

## `/preprocessing`

`find_exemplary_campaigns.Rmd`: for exploring projects to model the experimental work after

`create_features.py`: for creating features to denote metaphor usage within each campaign (e.g. salience, productivity, etc.). Uses `data/processed/labeled.csv` and `data/raw/gofundme_projects.csv` to create `data/processed/gofundme_projects.csv`.