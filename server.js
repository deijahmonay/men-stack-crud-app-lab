require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

const Car = require("./models/car.js")

app.use(express.urlencoded({ extended:false }));

app.get("/", async (req, res) => {
  res.render("index.ejs");
});

app.get("/cars", async (req, res) => {
  const allCars = await Car.find();
  res.render("cars/index.ejs", { cars: allCars });
});


app.get("/cars/new", (req, res) => {
  res.render("cars/new.ejs");
});

app.get("/cars/:carId", async (req, res) => {
  const foundCar = await Car.findById(req.params.carId)
  res.render("/cars/show.ejs", { car: foundCar });
});

app.post("/cars", async (req, res) => {
  if (req.body.isOn === 'on') {
    req.body.isOn = true;
  } else {
    req.body.isOn = false;
  }
  await Car.create(req.body);
  res.redirect("/cars");
});

app.get("/cars/:carId", (req, res) => {
  res.send(`This route renders the show page for car id: ${req.params/carId}!`)
})

app.listen(4000, () => {
  console.log("Listening on port 4000");
});