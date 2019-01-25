const Contest = require("../../models/contest");
const _ = require("lodash");

const getAll = (req, res) => {
  Contest.find({ type: "public" })
    .exec()
    .then(function(array) {
      const contests = [];
      _.forEach(array, function(value, key) {
        contests.push({
          status: value.status,
          competitors: value.competitors,
          expiry: value.expiry,
          format: value.format
        });
      });
      res.status(200).json(contests);
    });
};

module.exports = getAll;
