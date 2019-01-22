const express = require("express");
const register = require("./register");
const getAll = require("./getAll");
const getUser = require("./getUser");
const router = express.Router();

router.post("/register", function(req, res) {
  return register(req, res);
});

router.get("/all", function(req, res) {
  return getAll(req, res);
});

router.get("/", function(req, res) {
  return getUser(req, res);
});

module.exports = router;
