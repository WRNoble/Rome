const router = require("express").Router();
let Enemy = require("../models/enemy.model");

//get all emperors

router.route("/enemy").get((req, res) => {
  Enemy.find()
    .then((enemy) => res.json(enemy))
    .catch((err) => res.status(400).json("Error: " + err));
});

//add a new enemy

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const nation = req.body.nation;
  const death = Number(req.body.death);
  const bio = req.body.bio;
  const accomplishments = req.body.accomplishments;

  const newEnemy = new Enemy({
    name,
    nation,
    death,
    bio,
    accomplishments,
  });

  newEnemy
    .save()
    .then(() => res.json("Enemy Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//get an enemy by id

router.route("/:id").get((req, res) => {
  Enemy.findById(req.params.id)
    .then((enemy) => res.json(enemy))
    .catch((err) => res.status(400).json("Error: " + err));
});

//update enemy entry

router.route("/:id").post((req, res) => {
  Enemy.findByIdAndUpdate(req.params.id).then((enemy) => {
    enemy.name = req.body.name;
    enemy.nation = req.body.nation;
    enemy.death = Number(req.body.death);
    enemy.bio = req.body.bio;
    enemy.accomplishments = req.body.accomplishments;

    enemy
      .save()
      .then(() => res.json("Enemy has been updated"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

//delete an Enemy

router.route("/:id").delete((req, res) => {
  Enemy.findByIdAndDelete(req.params.id)
    .then(() => res.json("Enemy Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
