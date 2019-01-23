const Contest = require("../../models/contest");
const mongoose = require("mongoose");

const register = (req, res) => {
  const contest = new Contest({
    _id: new mongoose.Types.ObjectId(),
    time: req.body.time,
    competitors: req.body.competitors,
    type: req.body.type,
    status: req.body.status,
    scores: req.body.scores,
    format: req.body.format
  });
  contest
    .save()
    .then(function(result) {
      res.status(200).json({
        details: "Game has been registered."
      });
    })
    .catch(error => {
      res.status(500).json({
        details: error
      });
    });
};

module.exports = register;
