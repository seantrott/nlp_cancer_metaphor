library(tidyverse)
library(jsonlite)

read = function (x) {
  read_csv(paste("experimental/data/", x, sep=""), col_types = cols())
}
data =
  list.files("experimental/data/", pattern="*.csv") %>%
  map_df(~read(.))

dataf = data[, c("rt", "time_elapsed", "ppt", "recipient_sex", "metaphor", "response", "responses", "qtype")]

dataf = dataf %>%
  group_by(ppt) %>%
  summarise(
    donation = response[qtype %in% "trial"],
    cond_sex = recipient_sex[1],
    cond_metaphor = metaphor[1],
    rt_consent = rt[1],
    rt_instructions = rt[2],
    rt_trial = rt[3],
    rt_4 = rt[4],
    rt_5 = rt[5],
    rt_6 = rt[6],
    rt_7 = rt[7],
    rt_8 = rt[8],
    rt_9 = rt[9],
    rt_10 = rt[10],
    rt_11 = rt[11],
    rt_12 = rt[12],
    rt_13 = rt[13],
    rt_debrief = rt[14],
    total_time = time_elapsed[14],
    urgent = fromJSON(responses[qtype %in% "urgent"])$Q0,
    serious = fromJSON(responses[qtype %in% "serious"])$Q0,
    sympathy = fromJSON(responses[qtype %in% "sympathy"])$Q0,
    peace = fromJSON(responses[qtype %in% "peace"])$Q0,
    guilty = fromJSON(responses[qtype %in% "guilty"])$Q0,
    self_cancer = factor(fromJSON(responses[qtype %in% "self-cancer"])$Q0, 
                         levels = c('Yes', 'No', 'Prefer not to say'), 
                         labels = c("Y", "N", "NA")),
    ff_cancer = factor(fromJSON(responses[qtype %in% "ff-cancer"])$Q0, 
                       levels = c('Yes', 'No', 'Prefer not to say'), 
                       labels = c("Y", "N", "NA")),
    gender = factor(fromJSON(responses[qtype %in% "demographics"])$Q0, 
                    levels = c("Male", "Female", "Non-binary", "Prefer not to say"), 
                    labels = c("M", "F", "NB", "NA")),
    education = factor(fromJSON(responses[qtype %in% "demographics"])$Q1, 
                    levels = c('Less than a high school diploma',
                               'High school degree or equivalent (e.g. GED)',
                               'Associate degree (e.g. AA, AS)',
                               'Bachelor’s degree (e.g. BA, BS)',
                               'Master’s degree (e.g. MA, MS, MEd)',
                               'Professional degree (e.g. MD, DDS, DVM)',
                               'Doctorate (e.g. PhD, EdD)',
                               'Prefer not to say'), 
                    labels = c("<HS", "HS", "A", "B", "M", "P", "D", "NA")),
    socioeconomic = factor(fromJSON(responses[qtype %in% "demographics"])$Q2, 
                    levels = c('Less than $10,000',
                               '$10,000 through $24,999',
                               '$25,000 through $49,999',
                               '$50,000 through $74,999',
                               '$75,000 through $99,999',
                               '$100,000 through $149,999',
                               'More than $150,000',
                               'Prefer not to say'), 
                    labels = c("<10k", "10-25k", "25-50k", "50-75k", "75-100k", "100-150k", ">150k", "NA")),
    english = factor(fromJSON(responses[qtype %in% "demographics"])$Q3, 
                    levels = c('Yes', 'No', 'Prefer not to say'), 
                    labels = c("Y", "N", "NA")),
    age = fromJSON(responses[qtype %in% "age"])$Q0,
    purpose = fromJSON(responses[qtype %in% "purpose"])$Q0,
    feedback = fromJSON(responses[qtype %in% "feedback"])$Q0
  )

m = dataf$age > 1900 & !is.na(dataf$age)
dataf[m, ]$age = 2019 - dataf[m, ]$age # if the age field is > 1900, assume they entered their birth year. Subtract that from the current year, 2019.


write_csv(dataf, "experimental/clean_data.csv")