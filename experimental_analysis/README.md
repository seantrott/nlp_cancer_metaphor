This directory contains materials for an experimental setup.

Open `/materials/web/experiment.html` in a browser to via the experiment. Additionally, modifications can be made to this file to include the consent form and debrief document, and data-file saving functionality. The experiment is ready to be run locally on a Node.js server. With Node.js and expressjs up to date, in this directory run `node index.js` via the terminal.

In `/analysis` you'll first find some some preliminary exploration and also the primary hypothesis test. Under `/analysis/book` is an R bookdown directory which consists of much more detailed analyses.

In `/planning` are some files which were used to determine e.g. sample size.

In `/pilot` are the data for some pilot studies we ran, first a 30 participants study, then a 200 participant study (used to determine effect size), then a final 10 participant run to confirm all was working before running the large experiment.