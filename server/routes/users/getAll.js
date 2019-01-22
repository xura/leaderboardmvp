const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const status = require("../../status/status");

const getAll = (req, res) => {
  const payload = jwt.decode(req.headers.authorization);
  if (!!payload) {
    User.findOne({ _id: payload._id })
      .exec()
      .then(function(user) {
        const { role } = user;
        if (role === "admin") {
          User.find({}, function(err, array) {
            const users = [];
            array.forEach(function(user) {
              users.push({
                role: user.role,
                email: user.email,
                _id: user._id
              });
            });
            return res.status(200).json(users);
          });
        } else {
          res.status(401).json({
            details: status._401
          });
        }
      });
  } else {
    res.status(400).json({
      details: status._400
    });
  }
};

module.exports = getAll;
