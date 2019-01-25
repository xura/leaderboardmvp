const express = require("express");
const register = require("./register");
const getAll = require("./getAll");

const router = express.Router();

router.post("/register", function(req, res) {
  return register(req, res);
});

router.get("/all", function(req, res) {
  return getAll(req, res);
});

module.exports = router;
