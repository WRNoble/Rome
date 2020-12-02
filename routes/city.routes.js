const router = require("express").Router();
let City = require("../models/city.model");

//get all cities

router.route("/").get((req, res) => {
  City.find()
    .then((city) => res.json(city))
    .catch((err) => res.status(400).json("Error: " + err));
});

//add a new city

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const yearFounded = Number(req.body.yearFounded);
  const population = Number(req.body.population);
  const province = req.body.province;

  const newCity = new City({
    name,
    yearFounded,
    population,
    province,
  });

  newCity
    .save()
    .then(() => res.json("City Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//get an city by id

router.route("/:id").get((req, res) => {
  City.findById(req.params.id)
    .then((city) => res.json(city))
    .catch((err) => res.status(400).json("Error: " + err));
});

//update city entry

router.route("/:id").post((req, res) => {
  City.findByIdAndUpdate(req.params.id).then((city) => {
    city.name = req.body.name;
    city.yearFounded = Number(req.body.yearFounded);
    city.population = Number(req.body.population);
    city.province = req.body.province;

    city
      .save()
      .then(() => res.json("City has been updated"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

//delete an City

router.route("/:id").delete((req, res) => {
  City.findByIdAndDelete(req.params.id)
    .then(() => res.json("City Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
