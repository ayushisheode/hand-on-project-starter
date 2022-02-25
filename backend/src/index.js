/* eslint-disable prettier/prettier */
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require('./routes/route.js');
const bgRouter = require('./routes/bgRemove.js');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB database");
  })
  .catch((err) => {
    console.log("Error connecting to database " + err);
  });

  app.use(userRouter);

  app.use(bgRouter);

  app.get('/', (req, res) => {
    res.send('hello');
  });


app.listen(process.env.PORT, () => {
  console.log("Backend server has started at " + process.env.PORT);
});



