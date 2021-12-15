const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost:27017/myapp", {
  useNewUrlParser: "true",
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

app.get("/", (req, res) => {
  res.send("Hello");
});

const port = 3000;
app.listen(port, () => {
  console.log("Server is running at 3000");
});
