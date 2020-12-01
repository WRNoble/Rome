const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const enemySchema = new Schema(
  {
    name: { type: String, required: true },
    nation: { type: String, required: false },
    death: { type: Number, required: false },
    bio: { type: String, required: true },
    accomplishments: { type: String, required: false },
  },
  {
    timestamp: true,
  }
);

const Enemy = mongoose.model("Enemy", enemySchema);

module.exports = Enemy;
