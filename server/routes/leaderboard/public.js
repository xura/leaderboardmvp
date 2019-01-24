const Contest = require("../../models/contest");
const User = require("../../models/user");
const _ = require("lodash");

const public = (req, res) => {
  let competitors = {};
  Contest.find({ type: "public", format: 1, status: "finished" })
    .exec()
    .then(function(contest) {
      _.forEach(contest, function(value, key) {
        _.forEach(value.competitors, function(id, key) {
          competitors[id] = 0;
        });
      });

      User.find({}, function(err, users) {
        _.forEach(users, function(value, key) {
          if (!!value.score) {
            competitors[value._id] += value.score;
          }
        });
        res.status(200).json(competitors);
      });
    });
};

module.exports = public;
