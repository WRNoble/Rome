const router = require("express").Router();
let Politician = require("../models/politician.model");

//get all politician

router.route("/").get((req, res) => {
  Politician.find()
    .then((politician) => res.json(politician))
    .catch((err) => res.status(400).json("Error: " + err));
});

//add a new politician

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const yearBorn = Number(req.body.yearBorn);
  const riseToPower = req.body.riseToPower;
  const riseToPowerYear = Number(req.body.riseToPowerYear);
  const death = Number(req.body.death);
  const bio = req.body.bio;
  const accomplishments = req.body.accomplishments;

  const newPolitician = new Politician({
    name,
    yearBorn,
    riseToPower,
    riseToPowerYear,
    death,
    bio,
    accomplishments,
  });

  newPolitician
    .save()
    .then(() => res.json("Politician Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//get an politician by id

router.route("/:id").get((req, res) => {
  Politician.findById(req.params.id)
    .then((politician) => res.json(politician))
    .catch((err) => res.status(400).json("Error: " + err));
});

//update emperor entry

router.route("/:id").post((req, res) => {
  Politician.findByIdAndUpdate(req.params.id).then((politician) => {
    politician.name = req.body.name;
    politician.yearBorn = Number(req.body.yearBorn);
    politician.riseToPower = req.body.riseToPower;
    politician.riseToPowerYear = Number(req.body.riseToPowerYear);
    politician.death = Number(req.body.death);
    politician.bio = req.body.bio;
    politician.accomplishments = req.body.accomplishments;

    politician
      .save()
      .then(() => res.json("Politician has been updated"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

//delete an Politician

router.route("/:id").delete((req, res) => {
  Politician.findByIdAndDelete(req.params.id)
    .then(() => res.json("Politician Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
