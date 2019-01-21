const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const user = require("./routes/user");
const mongoose = require("mongoose");
const config = require("./configuration.json");

mongoose.connect(config.credentials);

app.get("/", function(req, res) {
  res.json({
    detail: "Authentication credentials were not provided."
  });
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/user", user);

module.exports = app;
