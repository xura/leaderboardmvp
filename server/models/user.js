const mongoose = require("mongoose");

const user = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "unassigned" },
  subscribed: [String],
  score: { type: Number, default: 0 }
});

module.exports = mongoose.model("User", user);
