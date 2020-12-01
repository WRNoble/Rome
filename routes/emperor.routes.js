const router = require("express").Router();
let Emperor = require("../models/emperor.model");

//get all emperors

router.route("/").get((req, res) => {
  Emperor.find()
    .then((emperor) => res.json(emperor))
    .catch((err) => res.status(400).json("Error: " + err));
});

//add a new emperor

router.route("/addemperor").post((req, res) => {
  const name = req.body.name;
  const yearBorn = Number(req.body.yearBorn);
  const riseToPower = req.body.riseToPower;
  const riseToPowerYear = Number(req.body.riseToPowerYear);
  const death = Number(req.body.death);
  const bio = req.body.bio;
  const accomplishments = req.body.accomplishments;

  const newEmperor = new Emperor({
    name,
    yearBorn,
    riseToPower,
    riseToPowerYear,
    death,
    bio,
    accomplishments,
  });

  newEmperor
    .save()
    .then(() => res.json("Emperor Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//get an emperor by id

router.route("/:id").get((req, res) => {
  Emperor.findById(req.params.id)
    .then((emperor) => res.json(emperor))
    .catch((err) => res.status(400).json("Error: " + err));
});
