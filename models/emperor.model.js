const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const emperorSchema = new Schema(
  {
    name: { type: String, required: true },
    yearBorn: { type: Number, required: false },
    riseToPower: { type: String, required: false },
    riseToPowerYear: { type: Number, required: false },
    death: { type: Number, required: false },
    bio: { type: String, required: true },
    accomplishments: { type: String, required: false },
  },
  {
    timestamp: true,
  }
);

const Emperor = mongoose.model("Emperor", emperorSchema);

module.exports = Emperor;
