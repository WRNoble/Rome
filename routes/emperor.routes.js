const router = require("express").Router();
let Emperor = require("../models/emperor.model");

router.route("/").get((req, res) => {
  Emperor.find()
    .then((emperor) => res.json(emperor))
    .catch((err) => res.status(400).json("Error: " + err));
});
