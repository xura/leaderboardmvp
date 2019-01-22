const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/users");
const mongoose = require("mongoose");
const config = require("./configuration.json");
const cors = require("cors");

const app = express();
app.use(cors());

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
