require('dotenv').config();
const express = require("express");
const app = express();


app.get("/", async (req, res) => {
  res.send("Hey there, mate!");
});



app.listen(4000, () => {
  console.log("Listening on port 4000");
});