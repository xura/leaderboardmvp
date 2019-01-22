const mongoose = require("mongoose");

const contest = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  competitors: [String],
  type: { type: String, default: "public" },
  time: { type: Date, required: true },
  updated: { type: Date, default: Date.now },
  status: { type: String, default: "inactive" },
  scores: [
    {
      playerOne: { type: Number, default: 0 },
      playerTwo: { type: Number, default: 0 }
    }
  ]
});

module.exports = mongoose.model("Contest", contest);
