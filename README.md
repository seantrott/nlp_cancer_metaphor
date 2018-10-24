# nlp_cancer_metaphor
Analyzing metaphors in cancer-related fundraising campaigns.


# Resources

Datasets:
https://webrobots.io/kickstarter-datasets/

https://github.com/lmeninato/GoFundMe

https://webrobots.io/indiegogo-dataset/

# Run

1. `make data_download`
2. `make data_process`
3. Use `data/processed/cancer_projects_full.csv` for analysis

# Steps

1. Scrape text from Kickstarter campaigns (and other platforms).  
2. Put into .csv format, associated with other campaign statistics (amount raised, etc.).
3. Detect metaphors using keyword search.
4. Regress campaign success ~ metaphors used.

