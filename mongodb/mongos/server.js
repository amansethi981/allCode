const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:2020/testdb", {
  useNewUrlParser: "true",
});

mongoose.connection.on("error", err => {
  console.log("err", err)
});

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
