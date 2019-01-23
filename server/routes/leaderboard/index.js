const express = require("express");
const public = require("./public");
const private = require("./private");
const router = express.Router();

router.get("/public", function(req, res) {
  return public(req, res);
});

router.get("/private", function(req, res) {
  return private(req, res);
});

module.exports = router;
