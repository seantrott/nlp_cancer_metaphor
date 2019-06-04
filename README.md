# Effects of Battle and Journey Metaphors on Charitable Donations for Cancer Patients

Patients with cancer frequently describe the experience with their illness metaphorically as a *battle* (“my fight against cancer”) or as a *journey* (“my path with cancer”). Previous work suggests that these metaphor families carry distinct emotional implications. For example, Hendricks et al. (2019) find that battle metaphors tend to make people believe the patient is likely to feel guiltier if they didn’t recover, and conversely that journey metaphors tend to make people believe the patient has a higher chance of making peace with their situation. However, it is currently unknown how the use of these metaphors translates to real-world behavior, such as charitable giving. Does the use of one of these metaphors to describe one’s cancer experience impact the likelihood and amount that potential donors contribute? Using hand-labeled data from more than 5,000 GoFundMe cancer-related campaigns, we ask how a campaign owner’s choice of metaphor usage predicts several measures of campaign success (e.g. number of donors and average donation amount) beyond what numerous other covariates predict (e.g. shares on Facebook). To our knowledge, this is the largest analysis of cancer-related crowdfunding campaigns to date. Critically, we find that increases in usage of either metaphor family (battle or journey) increase both the number of donors and the mean donation amount. Currently, we are designing a lab experiment to determine: a) whether these results replicate in a controlled, experimental setting; and b) if so, potential causal mechanisms for the observed relationship between metaphor usage and charitable giving behavior.

# Resources

Datasets:

https://webrobots.io/kickstarter-datasets/

https://github.com/lmeninato/GoFundMe

# Run

1. `make data_download`
2. `make data_process`

# Steps

1. Scrape text from Kickstarter campaigns (and other platforms).  
2. Put into .csv format, associated with other campaign statistics (amount raised, etc.).
3. Detect metaphors using keyword search.
4. Regress campaign success ~ metaphors used.

