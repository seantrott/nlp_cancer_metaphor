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

# Steps

1. Scrape text from Kickstarter campaigns (and other platforms).  
2. Put into .csv format, associated with other campaign statistics (amount raised, etc.).
3. Detect metaphors using keyword search.
4. Regress campaign success ~ metaphors used.

# To-do

 - [x] Mine GoFundMe projects (annotate instances of metaphor)
 - [x] Implement a measure of diversity/productivity
 - [x] Add productivity to model analysis
 - [x] Implement analyses for all DVs
