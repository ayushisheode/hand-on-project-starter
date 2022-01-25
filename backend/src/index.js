const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB database");
  })
  .catch((err) => {
    console.log("Error connecting to database " + err);
  });

// app.get("/helloWorld", (req, res) => {
//   res.send("Hello World");
// });

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.listen(process.env.PORT, () => {
  console.log("Backend server has started at " + process.env.PORT);
});
