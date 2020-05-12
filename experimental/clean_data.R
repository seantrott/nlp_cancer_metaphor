library(tidyverse)
library(jsonlite)
library(glue)
library(crayon)

# set the working directory to the project base directory

# setwd("")

read = function (x) {
  #, Read the raw data from the experiment (from .csv form)
  
  read_csv(paste("data/raw/", x, sep=""), col_types = cols())
}

# iterate over all raw .csv files and collate data
data =
  list.files("data/raw/", pattern="*.csv") %>%
  map_df(~read(.))

# retain only useful columns
dataf = data[, c("rt", "time_elapsed", "ppt", "recipient_sex", "metaphor", "button_pressed", "response", "responses", "qtype")]

# group by participant, then create the relevant columns
dataf = dataf %>%
  group_by(ppt) %>%
  summarise(
    donation = response[qtype %in% "trial"],
    cond_sex = recipient_sex[1],
    cond_metaphor = metaphor[1],
    rt_consent = rt[1], # RT of consent form, in milliseconds
    rt_check1 = rt[2],
    rt_check2 = rt[3],
    rt_instructions = rt[4], # RT of instruction pages, in milliseconds
    rt_trial = rt[5], # RT of experimental trial, in milliseconds
    rt_description = rt[6], # (all below, follow-up questions) in milliseconds
    rt_pastdonations = rt[7],
    rt_sympathy = rt[8],
    rt_urgent = rt[9],
    rt_self_cancer = rt[10],
    rt_ff_cancer = rt[11],
    rt_demographic = rt[12],
    rt_age = rt[13],
    rt_purpose = rt[14],
    rt_feedback = rt[15],
    rt_debrief = rt[16], # RT of debrief form, in milliseconds
    total_time = time_elapsed[16], # total time in milliseconds
    check1 = button_pressed[qtype %in% "check1"],
    check2 = button_pressed[qtype %in% "check2"],
    description = fromJSON(responses[qtype %in% "description"])$Q0,
    past_donations = fromJSON(responses[qtype %in% "past-donations"])$Q0,
    urgent = fromJSON(responses[qtype %in% "urgent"])$Q0,
    sympathy = fromJSON(responses[qtype %in% "sympathy"])$Q0,
    self_cancer = factor(fromJSON(responses[qtype %in% "self-cancer"])$Q0, 
                         levels = c('Yes', 'No', 'Prefer not to say'), 
                         labels = c("Y", "N", "OO")),
    ff_cancer = factor(fromJSON(responses[qtype %in% "ff-cancer"])$Q0, 
                       levels = c('Yes', 'No', 'Prefer not to say'), 
                       labels = c("Y", "N", "OO")),
    gender = factor(fromJSON(responses[qtype %in% "demographics"])$Q0, 
                    levels = c("Male", "Female", "Non-binary", "Prefer not to say"), 
                    labels = c("M", "F", "NB", "OO")),
    education = factor(fromJSON(responses[qtype %in% "demographics"])$Q1, 
                    levels = c('Less than a high school diploma',
                               'High school degree or equivalent (e.g. GED)',
                               'Associate degree (e.g. AA, AS)',
                               'Bachelor’s degree (e.g. BA, BS)',
                               'Master’s degree (e.g. MA, MS, MEd)',
                               'Professional degree (e.g. MD, DDS, DVM)',
                               'Doctorate (e.g. PhD, EdD)',
                               'Prefer not to say'), 
                    labels = c("<HS", "HS", "A", "B", "M", "P", "D", "OO")),
    socioeconomic = factor(fromJSON(responses[qtype %in% "demographics"])$Q2,
                    levels = c('Less than $10,000',
                               '$10,000 through $24,999',
                               '$25,000 through $49,999',
                               '$50,000 through $74,999',
                               '$75,000 through $99,999',
                               '$100,000 through $149,999',
                               'More than $150,000',
                               'Prefer not to say'),
                    labels = c("<10k", "10-25k", "25-50k", "50-75k", "75-100k", "100-150k", ">150k", "OO")),
    english = factor(fromJSON(responses[qtype %in% "demographics"])$Q3,
                    levels = c('Yes', 'No', 'Prefer not to say'),
                    labels = c("Y", "N", "OO")),
    age = fromJSON(responses[qtype %in% "age"])$Q0,
    purpose = fromJSON(responses[qtype %in% "purpose"])$Q0,
    feedback = fromJSON(responses[qtype %in% "feedback"])$Q0
  )

# convert past donations to integers, coercing non-integers to NAs
dataf$past_donations = as.integer(dataf$past_donations)
# fill NAs with mean value
nans = is.na(dataf$past_donations)
glue_col("{red A total of {sum(nans)} ({round(sum(nans) / nrow(dataf) * 100,4)}%) past donation amounts were imputed}")
dataf[nans, ]$past_donations = round(mean(dataf$past_donations, na.rm = T),3)

# convert age inputs to integers
dataf$age = as.integer(dataf$age)
# if anyone entered there age as > 1900, assume they typed their birth year and convert by subtracting that from the current year
m = dataf$age > 1900 & !is.na(dataf$age)
dataf[m, ]$age = 2020 - dataf[m, ]$age
# fill NAs with mean value
nans = is.na(dataf$age)
glue_col("{red A total of {sum(nans)} ({round(sum(nans) / nrow(dataf) * 100,4)}%) ages were imputed}")
dataf[nans, ]$age = round(mean(dataf$age, na.rm = T),3)

# save the data frame to a cleaned .csv
write_csv(dataf, "data/data_clean.csv")