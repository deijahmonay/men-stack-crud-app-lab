require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

const Car = require("./models/car.js")


app.get("/", async (req, res) => {
  res.render("index.ejs");
});

app.get("/cars/new", (req, res) => {
  res.send("This route sends the user a car forms page");
});


app.listen(4000, () => {
  console.log("Listening on port 4000");
});