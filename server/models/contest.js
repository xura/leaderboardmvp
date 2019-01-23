const mongoose = require("mongoose");
const moment = require("moment");

const contest = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    type: { type: String, default: "public" },
    status: { type: String, default: "inactive" },
    scores: [{ type: Number, default: [0, 0] }],
    format: { type: Number, required: true },
    competitors: [{ type: String }],
    subscribers: [{ type: String }],
    expiry: { type: Date, default: moment().add(23, "hours") }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Contest", contest);
