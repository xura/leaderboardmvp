const express = require("express");
const login = require("./login");
const register = require("./register");
const getAll = require("./getAll");

const router = express.Router();

router.post("/register", function(req, res) {
  return register(req, res);
});

router.post("/login", function(req, res) {
  return login(req, res);
});

router.get("/all", function(req, res) {
  return getAll(req, res);
});

module.exports = router;
