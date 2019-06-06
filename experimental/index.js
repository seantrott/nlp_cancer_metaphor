const express = require('express')
const app = express();

const fs = require('fs');

app.use("/", express.static(__dirname + '/experiment_design'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post("/save", function (req, res) {
  d = req.body
  fs.writeFile("data/" + d.filename + ".csv", d.filedata, function (err) {
    console.log("saved")
  })
})

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
