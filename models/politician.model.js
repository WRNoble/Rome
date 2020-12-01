const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const politicianSchema = new Schema(
  {
    name: { type: String, required: true },
    yearBorn: { type: Number, required: false },
    office: { type: String, required: false },
    riseToPowerYear: { type: Number, required: false },
    bio: { type: String, required: true },
    accomplishments: { type: String, required: false },
  },
  {
    timestamp: true,
  }
);

const Politician = mongoose.model("Politician", politicianSchema);

module.exports = Politician;
