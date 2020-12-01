const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const citySchema = new Schema(
  {
    name: { type: String, required: true },
    yearFounded: { type: Number, required: false },
    population: { type: Number, required: false },
    province: { type: String, required: true },
  },
  {
    timestamp: true,
  }
);

const City = mongoose.model("City", citySchema);

module.exports = City;
