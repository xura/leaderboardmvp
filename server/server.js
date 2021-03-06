const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/users");
const contest = require("./routes/contests");
const leaderboard = require("./routes/leaderboard");
const mongoose = require("mongoose");
const config = require("./configuration.json");
const app = express();

const cors = require("cors");

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
app.use("/api/contest", contest);
app.use("/api/leaderboard", leaderboard);

module.exports = app;
