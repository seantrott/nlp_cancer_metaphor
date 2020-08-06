library(dplyr)
library(glue)
library(crayon)

#
# Determine the number of removalable duplicate Workers in the primary data file
# Since we cannot match survey codes explicitly (too many false negatives), we count only
# those data which can be successfully cross-referenced
#

setwd("/Users/alex/Documents/BergenLab/nlp_cancer_metaphor/experimental_analysis/")

# load each clean data file (probably either the large pilot or the hold out data)
file1 <- "data_clean_trial_large_filtered.csv"
data_trial_large <- read_csv(paste("data/", file1, sep = ""), col_types = cols())

# file2 <- "data_clean_holdout_filtered.csv"
# data_hold_out <- read_csv(paste("data/data/", file2, sep = ""), col_types = cols())

# aggregate all batch data for Worker IDs
data_batches <- tibble()

# batch 45 was canceled early and negligible
for (i in c(1:44, 46, 47, 48)) {
  name <- paste("data/mturk_batches/batch", i, ".csv", sep = "")
  suppressWarnings(temp <- read_csv(name, 
                                    col_types = cols_only(
                                      HITId = "c",
                                      AssignmentId = "c",
                                      WorkerId = "c",
                                      Answer.surveycode = "c"
                                    )))
  temp$batch = i

  data_batches <- bind_rows(data_batches, temp)
}

workers_duplicated <- duplicated(data_batches$WorkerId) | duplicated(data_batches$WorkerId, fromLast = T)

survey_codes_of_duplicated <- data_batches[workers_duplicated, ]$Answer.surveycode

print(glue_col("{green Total number of assignments given: {nrow(data_batches)}}"))
print(glue_col("{green Total number of unique worker IDs: {length(unique(data_batches$WorkerId))}}"))

print(glue_col("{green Total number of duplicated Worker IDs: {sum(workers_duplicated)/2}}"))

print(glue_col("{red {sum(data_trial_large$ppt %in% survey_codes_of_duplicated) / 2} responses may be removed from {file1}}"))
# print(glue_col("{red {sum(data_hold_out$ppt %in% survey_codes_of_duplicated) / 2} responses may be removed from {file2}}"))
