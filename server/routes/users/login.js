const bcrypt = require("bcrypt");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const config = require("../../configuration.json");

const login = (req, res) => {
  User.findOne({ email: req.body.email })
    .exec()
    .then(function(user) {
      bcrypt.compare(req.body.password, user.password, function(err, result) {
        if (err) {
          return res.status(401).json({
            details: "Authentication credentials were not provided."
          });
        }
        if (result) {
          const JWTToken = jwt.sign(
            {
              email: user.email,
              _id: user._id
            },
            config.secret,
            {
              expiresIn: config.expiry
            }
          );
          return res.status(200).json({
            token: JWTToken
          });
        }
        return res.status(401).json({
          details: "Authentication credentials were not provided."
        });
      });
    })
    .catch(error => {
      res.status(500).json({
        error: error
      });
    });
};

module.exports = login;
