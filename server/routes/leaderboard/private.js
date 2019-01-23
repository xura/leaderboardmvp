const Contest = require("../../models/contest");

const public = (req, res) => {
  Contest.find({ type: "private" })
    .exec()
    .then(function(game) {
      return res.status(200).json(game);
    });
};

module.exports = public;
