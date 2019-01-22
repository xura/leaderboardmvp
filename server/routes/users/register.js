const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../../models/user");
const mongoose = require("mongoose");

const register = (req, res) => {
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
};

module.exports = register;
