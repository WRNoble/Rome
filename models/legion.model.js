const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const legionSchema = new Schema(
  {
    title: { type: String, required: true },
    founding: { type: String, required: false },
    emblem: { type: String, required: false },
    postings: { type: String, required: false },
    honors: { type: String, required: false },
  },
  {
    timestamp: true,
  }
);

const Legion = mongoose.model("Legion", legionSchema);

module.exports = Legion;
