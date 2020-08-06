library(tidyverse)
library(glue)
library(crayon)

setwd("/Users/alex/Documents/BergenLab/nlp_cancer_metaphor/experimental/mturk/")

batch.file = "batch48.csv"
batch.output.file = "batch48_output.csv"
trials.file = "../data/data_clean_test.csv"
CHECK1_ANS = 1
CHECK2_ANS = 2

trials = read_csv(trials.file, col_types = cols())
glue_col("{green Number of Data: {nrow(trials)}}")

# load most recent batch of participants
batch = read_csv(batch.file, col_types = cols())
glue_col("{green Number of HITs received: {nrow(batch)}}")

rejected_workers = trials[trials$check1 != CHECK1_ANS | trials$check2 != CHECK2_ANS, ]$ppt

glue_col("{green Number of batch ppts who passed checks: {sum(!(batch$Answer.surveycode %in% rejected_workers))}}")
glue_col("{green Number of batch ppts who failed checks: {sum(batch$Answer.surveycode %in% rejected_workers)}}")

# approved_workers = c(approved_workers, "")
batch[batch$Answer.surveycode %in% rejected_workers, ]$Answer.surveycode

batch[batch$Answer.surveycode %in% rejected_workers, ]$Reject = "Failed to correctly answer one or both of the bot check questions"
batch[!(batch$Answer.surveycode %in% rejected_workers), ]$Approve = "x"

# trials %>% filter(ppt == '') %>% select(check1, check2)

write_csv(batch, batch.output.file, na = "")

