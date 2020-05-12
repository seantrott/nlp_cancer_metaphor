library(tidyverse)
library(glue)
library(crayon)

# setwd("mturk/")

qualification.col.name = "UPDATE-Completed Cancer-Related Crowdfunding"
batch.file = "batch1.csv"
workers.file = "workers1.csv"
workers.output.file = "workers1_upload.csv"


# load most recent batch of participants
batch = read_csv(batch.file, 
                 col_types = cols_only(
                   HITId = col_character(), 
                   WorkerId = col_character(), 
                   Answer.surveycode = col_character()
                   )
                 )

num.workers = length(unique(batch$WorkerId))

if (length(unique(batch$HITId)) != 1) stop(glue_col("{red HIT ID not equal across batch}"))
if (num.workers != nrow(batch)) stop(glue_col("{red Duplicate Work IDs exist within batch}"))
if (length(unique(batch$Answer.surveycode)) != nrow(batch)) stop(glue_col("{red Duplicate participant IDs exist within batch}"))
if (num.workers != 1408) glue_col("{red Unexpected number of workers: {num.workers}}")

# load all workers
all.workers = read_csv(workers.file, col_types = cols())

nrow(batch)
nrow(all.workers)

if (!(qualification.col.name %in% colnames(all.workers))) stop(glue_col("{red Column {qualification.col.name} doesn't exist}"))

# update the qualification score for participants who were in this batch
all.workers[all.workers$`Worker ID` %in% batch$WorkerId, qualification.col.name] = 1

write_csv(all.workers, workers.output.file, na = "")
