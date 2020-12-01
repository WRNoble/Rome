const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const politicianSchema = new Schema(
  {
    name: { type: String, required: true },
    office: { type: String, required: false },
    bio: { type: String, required: true },
    accomplishments: { type: String, required: false },
  },
  {
    timestamp: true,
  }
);

const Politician = mongoose.model("Politician", politicianSchema);

module.exports = Politician;