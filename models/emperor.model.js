const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const emperorSchema = new Schema(
  {
    name: { type: String, required: true },
    yearBorn: { type: String, required: false },
    riseToPower: { type: String, required: false },
    riseToPowerYear: { type: String, required: false },
    death: { type: String, required: false },
    bio: { type: String, required: true },
    accomplishments: { type: String, required: false },
  },
  {
    timestamp: true,
  }
);

const Emperor = mongoose.model("Emperor", emperorSchema);

module.exports = Emperor;
