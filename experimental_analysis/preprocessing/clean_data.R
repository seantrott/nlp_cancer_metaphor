# Import Libraries -----------------------------------------------------------

library(tidyverse)
library(jsonlite)
library(glue)
library(crayon)

# set the working directory to the project base directory
setwd("/Users/alex/Documents/BergenLab/nlp_cancer_metaphor/experimental/")

# Load Data ------------------------------------------------------------------

# directory with all the individual files from each participant
input.dir <- "data/raw/"
# name of the file which to save to
output.file <- "data/data_clean_test.csv"

read <- function (x) {
  #, Read the raw data from the experiment (from .csv form)
  read_csv(paste(input.dir, x, sep = ""), col_types = cols())
}

# iterate over all raw .csv files and collate data
data <- list.files(input.dir, pattern = "*.csv") %>%
       map_df(~read(.))

# Retain Only Useful Columns -------------------------------------------------

dataf <- data[, c("rt", "time_elapsed", "ppt", "recipient_sex", "metaphor", 
                 "button_pressed", "response", "responses", "qtype")]

# Group and Summarize Participants -------------------------------------------

dataf <- dataf %>%
  group_by(ppt) %>%                           # group to create one row per participant
  summarise(
    donation = response[qtype %in% "trial"],  # use the response value in the row which has "trial" in the `qtype` column
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
                         labels = c("Y", "N", "OO")), # "OO" stands for Opt-Out
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

# Print Data Total -----------------------------------------------------------

glue_col("{blue {nrow(dataf)} total participant data files used}")

# Correct Year-Formatted Ages ------------------------------------------------

# convert age inputs to integers
dataf$age <- as.integer(dataf$age)
# if anyone entered there age as > 1900, assume they typed their birth year and convert by subtracting that from the current year
m <- dataf$age > 1900 & !is.na(dataf$age)
dataf[m, ]$age <- 2020 - dataf[m, ]$age

# Bin Responses by Trial Response Time ---------------------------------------

trialRTBinBreaks = seq(0, 1, length.out = 5)

# divide the responses into four equal intervals according to response time on
# the main trial in seconds
dataf$rt_trial_group = cut(x = dataf$rt_trial / 1000, 
                           breaks = quantile(dataf$rt_trial / 1000, trialRTBinBreaks), 
                           include.lowest = T)

# Clean up Past Donations Field ----------------------------------------------

map_keywords <- c("zero", "once", "twice", "several", "few")
map_numerical <- c(0, 1, 2, 2, 3)

mapper <- function (x) {
  r = sapply(map_keywords, function (k) grepl(k, x, fixed = T))
  if (sum(r)==1) return(map_numerical[r])
  
  m = str_match(x, "(\\d{1,2}) times")[, 2]
  if (!is.na(m)) return(as.integer(m))
  
  return(as.integer(x))
}

dataf$past_donations = sapply(dataf$past_donations, mapper)

# Save Cleaned Data ----------------------------------------------------------

# save the data frame to a cleaned .csv
write_csv(dataf, output.file)

glue_col("{green Saved as {output.file}!}")