library(dplyr)

setwd("/Users/alex/Documents/BergenLab/nlp_cancer_metaphor/experimental/")

cdata <- read_csv("data/data_clean_test.csv", col_types = cols())

bdata <- tibble()
for (i in c(1:44, 46)) {
  name <- paste("mturk/batch", i, ".csv", sep = "")
  suppressWarnings(temp <- read_csv(name, 
                                    col_types = cols_only(
                                      HITId = "c",
                                      AcceptTime = "c",
                                      SubmitTime = "c",
                                      AssignmentId = "c",
                                      WorkerId = "c",
                                      Answer.surveycode = "c"
                                    )))
  temp$batch = i

  bdata <- bind_rows(bdata, temp)
}

print(nrow(bdata))

dupmask <- duplicated(bdata$WorkerId)
dupids <- bdata[dupmask, ]$Answer.surveycode

ndata <- cdata[!(cdata$ppt %in% dupids), ]

print(nrow(ndata))
