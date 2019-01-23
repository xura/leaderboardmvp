const mongoose = require("mongoose");

const game = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  roomId: { type: String, required: true },
  winner: { type: String, required: true },
  loser: { type: String, required: true }
});

module.exports = mongoose.model("Game", game);
