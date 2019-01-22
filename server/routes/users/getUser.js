const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const status = require("../../status/status");

const getUser = (req, res) => {
  const payload = jwt.decode(req.headers.authorization);
  if (!!payload) {
    User.findOne({ _id: payload._id })
      .exec()
      .then(function(user) {
        const model = {
          _id: user._id,
          emaiL: user.email,
          role: user.role
        };
        return res.status(200).json(model);
      });
  } else {
    res.status(400).json({
      details: status._400
    });
  }
};

module.exports = getUser;
