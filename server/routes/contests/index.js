const express = require("express");
const register = require("./register");

const router = express.Router();

router.post("/register", function(req, res) {
  return register(req, res);
});

module.exports = router;
