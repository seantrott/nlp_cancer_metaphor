const express = require('express')
const app = express();

const fs = require('fs');

app.use("/", express.static(__dirname + '/web'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post("/save", function (req, res) {
  d = req.body
  fs.writeFile("data/" + d.filename, d.filedata, function (err) {
    console.log("saved at data/" + d.filename)
  })
})

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
