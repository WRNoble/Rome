const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const politicianSchema = new Schema(
  {
    name: { type: String, required: true },
    career: { type: String, required: true },
    bio: { type: String, required: true },
    accomplishments: { type: String, required: false },
  },
  {
    timestamp: true,
  }
);

const Politician = mongoose.model("Politician", politicianSchema);

module.exports = Politician;
