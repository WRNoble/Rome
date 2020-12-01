const router = require("express").Router();
let Legion = require("../models/legion.model");

//get all legion

router.route("/").get((req, res) => {
  Legion.find()
    .then((legion) => res.json(legion))
    .catch((err) => res.status(400).json("Error: " + err));
});

//add a new legion

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const founding = req.body.founding;
  const emblem = req.body.emblem;
  const postings = req.body.postings;
  const honors = req.body.honors;

  const newLegion = new Legion({
    title,
    founding,
    emblem,
    postings,
    honors,
  });

  newLegion
    .save()
    .then(() => res.json("Legion Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//get an legion by id

router.route("/:id").get((req, res) => {
  Legion.findById(req.params.id)
    .then((legion) => res.json(legion))
    .catch((err) => res.status(400).json("Error: " + err));
});

//update legion entry

router.route("/:id").post((req, res) => {
  Legion.findByIdAndUpdate(req.params.id).then((legion) => {
    legion.title = req.body.title;
    legion.founding = req.body.founding;
    legion.emblem = req.body.emblem;
    legion.postings = req.body.postings;
    legion.honors = req.body.honors;

    legion
      .save()
      .then(() => res.json("Legion has been updated"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

//delete an Legion

router.route("/:id").delete((req, res) => {
  Legion.findByIdAndDelete(req.params.id)
    .then(() => res.json("Legion Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
