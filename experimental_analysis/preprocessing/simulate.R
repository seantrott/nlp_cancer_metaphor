library(dplyr)

setwd("/Users/alex/Documents/BergenLab/nlp_cancer_metaphor/experimental/data")

shuffle <- function(v, prob = NULL) {
  return(v[sample(1:length(v), replace = F, prob = prob)])
}

N = 5000

data = data.frame(donation = numeric(N),
                  cond_sex = character(N),
                  cond_metaphor = character(N),
                  past_donations = numeric(N),
                  urgent = numeric(N),
                  sympathy = numeric(N),
                  self_cancer = character(N),
                  ff_cancer = character(N),
                  gender = character(N),
                  education = character(N),
                  socioeconomic = character(N),
                  age = numeric(N))

data$cond_sex = shuffle(rep(c("male", "female"), length.out = N))
data$cond_metaphor = shuffle(rep(c("battle", "journey", "literal"), length.out = N))

data$past_donations = as.integer(rexp(N, 20)*100)
data$urgent = 6 - as.integer(rexp(N, 10)*10)
data[data$urgent < 0, "urgent"] = 5
data$sympathy = 6 - as.integer(rexp(N, 10)*10)
data[data$sympathy < 0, "sympathy"] = 6

data$self_cancer = sample(c("N", "Y", "OO"), N, replace = T, prob = c(0.7, 0.2, 0.1))
data$ff_cancer = sample(c("N", "Y", "OO"), N, replace = T, prob = c(0.5, 0.4, 0.1))

data$gender = sample(c("M", "F", "NB", "OO"), N, replace = T, prob = c(0.4, 0.45, 0.05, 0.1))

data$education = shuffle(rep(c("<HS", "HS", "A", "B", "M", "P", "D", "OO"), length.out = N))
data$socioeconomic = shuffle(rep(c("<10k", "10-25k", "25-50k", "50-75k", "75-100k", "100-150k", ">150k", "OO"), length.out = N))

data$age = as.integer(runif(N, 18, 80))

data$donation = sample(c(0, 25, 50), size = N, replace = T, prob = c(0.3, 0.4, 0.3))

data$donation =
  with(data,
    donation +
    ifelse(cond_sex == "male", yes = rnorm(N, -1, 2), no = rnorm(N, 0, 2)) +
    ifelse(cond_metaphor == "battle", yes = rnorm(N, 4, 1), 
           no = ifelse(cond_metaphor == "journey", yes = rnorm(N, -2, 2), no = rnorm(N, 0, 3))) +
    0.5 * past_donations +
    0.1 * urgent +
    0.2 * sympathy +
    ifelse(self_cancer == "Y", yes = rnorm(N, 5, 2), no = rnorm(N, 0, 2)) +
    ifelse(ff_cancer == "Y", yes = rnorm(N, 2.5, 2), no = rnorm(N, 0, 2)) +
    0.5 * age +
    -0.01 * age^2
  ) %>%
  as.integer()

m = data$donation > 50
data[m, ]$donation = sample(c(0, 25, 50), size = sum(m), replace = T, prob = c(0.3, 0.4, 0.3))

m = data$donation < 0
data[m, ]$donation = sample(c(0, 25, 50), size = sum(m), replace = T, prob = c(0.3, 0.4, 0.3))

hist(data$donation)

write_csv(data, "simulated_data.csv")
