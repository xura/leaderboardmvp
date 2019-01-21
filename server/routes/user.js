const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../configuration.json");

router.post("/register", function(req, res) {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else {
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: hash
      });
      user
        .save()
        .then(function(result) {
          res.status(200).json({
            details: "User has been created."
          });
        })
        .catch(error => {
          res.status(500).json({
            error: err
          });
        });
    }
  });
});

router.post("/login", function(req, res) {
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
});

router.get("/", function(req, res) {
  res.status(405).json({
    details: "Method Not Allowed."
  });
});

module.exports = router;
