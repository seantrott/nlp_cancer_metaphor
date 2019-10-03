# Effects of Battle and Journey Metaphors on Charitable Donations for Cancer Patients

Patients with cancer frequently describe the experience with their illness metaphorically as a *battle* (“my fight against cancer”) or as a *journey* (“my path with cancer”). Previous work suggests that these metaphor families carry distinct emotional implications. For example, Hendricks et al. (2019) find that battle metaphors tend to make people believe the patient is likely to feel guiltier if they didn’t recover, and conversely that journey metaphors tend to make people believe the patient has a higher chance of making peace with their situation. However, it is currently unknown how the use of these metaphors translates to real-world behavior, such as charitable giving. Does the use of one of these metaphors to describe one’s cancer experience impact the likelihood and amount that potential donors contribute? Using hand-labeled data from more than 5,000 GoFundMe cancer-related campaigns, we ask how a campaign owner’s choice of metaphor usage predicts several measures of campaign success (e.g. number of donors and average donation amount) beyond what numerous other covariates predict (e.g. shares on Facebook). To our knowledge, this is the largest analysis of cancer-related crowdfunding campaigns to date. Critically, we find that increases in usage of either metaphor family (battle or journey) increase both the number of donors and the mean donation amount. Currently, we are designing a lab experiment to determine: a) whether these results replicate in a controlled, experimental setting; and b) if so, potential causal mechanisms for the observed relationship between metaphor usage and charitable giving behavior.

# Resources

Datasets:

https://webrobots.io/kickstarter-datasets/

https://github.com/lmeninato/GoFundMe

# Run

1. `make data_download`
2. `make data_process`

# Structure

## `/data/processed`

Processed data files

## `/data/raw`

Raw data files

## `/experimental/data`

Experimental data

## `/experimental/experiment_design`

JPsych files

## `/experimental/Fundraiser_files`

Content and design files for the GoFundMe template for JPsych

## `/exploration`

Jupyter Notebooks for exploring the observational data

## `/reports`

Visualizations and files to create report visualizations.

`visualizations.Rmd`

## `/src/data`

`data_download.py`: for downloading or organizing Kickstarter pilot data

`mturk_compilation.py`: for creating items for Mechanical Turkers to label metaphors

`project_search.Rmd`: for exploring projects

## `/src/features`

Creating features

`build_text_features.py`: for creating text features for Kickstarter data. Uses `data/processed/cancer_projects_full.csv` to create `data/processed/kickstarter_plus_metaphor.csv`.

`data_process.py`: for creating features to denote metaphor usage within each campaign (e.g. salience, productivity, etc.). Uses `data/processed/labeled.csv` and `data/raw/gofundme_projects.csv` to create `data/processed/gofundme_projects.csv`.

`extract_metaphors.py`: deprecated.

## `/src/reports`

Analyses and reporting

`campaigns.py`: for creating metaphor features for custom set of fictional campaigns. Uses `projects.csv` and `labeled.csv` to create `projects_full.csv`

`make_campaigns.py`: for labeling metaphors of custom set of fictional campaigns. Uses `projects.csv` to create `labeled.csv`.

# Coding

After labeling metaphors in `extract_metaphors.ipynb`, run `make data_process`.