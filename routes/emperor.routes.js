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

//update emperor entry

router.route("/updateemperor/:id").post((req, res) => {
  Emperor.findByIdAndUpdate(req.params.id).then((emperor) => {
    emperor.name = req.body.name;
    emperor.yearBorn = Number(req.body.yearBorn);
    emperor.riseToPower = req.body.riseToPower;
    emperor.riseToPowerYear = Number(req.body.riseToPowerYear);
    emperor.death = Number(req.body.death);
    emperor.bio = req.body.bio;
    emperor.accomplishments = req.body.accomplishments;

    emperor
      .save()
      .then(() => res.json("Emperor has been updated"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

//delete an Emperor

router.route("/:id").delete((req, res) => {
  Emperor.findByIdAndDelete(req.params.id)
    .then(() => res.json("Emperor Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
