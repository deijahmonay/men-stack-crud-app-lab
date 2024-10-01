require('dotenv').config();
const express = require("express");

const app = express();






// GET /
app.get("/", async (req, res) => {
  res.render("index.ejs");
});



app.listen(4000, () => {
  console.log("Listening on port 4000");
});