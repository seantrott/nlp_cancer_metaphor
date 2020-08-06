library(tidyverse)
library(glue)
library(crayon)

setwd("/Users/alex/Documents/BergenLab/nlp_cancer_metaphor/experimental/mturk/")


batch.file = "batch48.csv"
workers.file = "workers48.csv"
workers.output.file = "workers48_output.csv"

# after we've downloaded the batch and workers files and they're in our downloads folder, copy them
# to the working directory under new names.
# IMPORTANT: FILES DELETED - SEE END OF SCRIPT
system(glue("cp /Users/alex/Downloads/Batch_*.csv {batch.file}; cp /Users/alex/Downloads/User_*.csv {workers.file};"))

qualification.col.name = "UPDATE-Completed Cancer-Related Crowdfunding"

# load most recent batch of participants
batch = read_csv(batch.file, 
                 col_types = cols_only(
                   HITId = col_character(),
                   WorkerId = col_character(),
                   Answer.surveycode = col_character()
                 ))

nrow(batch)

num.workers = length(unique(batch$WorkerId))

if (length(unique(batch$HITId)) != 1) stop(glue_col("{red HIT ID not equal across batch}"))
if (num.workers != nrow(batch)) stop(glue_col("{red Duplicate Work IDs exist within batch}"))
if (length(unique(batch$Answer.surveycode)) != nrow(batch)) glue_col("{red Duplicate participant IDs exist within batch}")

# load all workers
all.workers = read_csv(workers.file, col_types = cols())

glue_col("{green Number of HITs received: {nrow(batch)}}")
glue_col("{green Number of workers total: {nrow(all.workers)}}")

if (!(qualification.col.name %in% colnames(all.workers))) stop(glue_col("{red Column {qualification.col.name} doesn't exist}"))

# update the qualification score for participants who were in this batch
all.workers[all.workers$`Worker ID` %in% batch$WorkerId, qualification.col.name] = 1

write_csv(all.workers, workers.output.file, na = "")

system("rm /Users/alex/Downloads/Batch_*.csv; rm /Users/alex/Downloads/User_*.csv;")
