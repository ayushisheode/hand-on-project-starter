/* eslint-disable prettier/prettier */
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require('./routes/route.js');
//const auth = require("./routes/auth.js");

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

  app.get('/', (req, res) => {
    res.send('hello');
  });

// app.post("/register", auth.register);
// app.post("/login", auth.login);

// app.post("/register", (req,res)=>{
//   console.log(req.body);
// })

// app.post("/login", (req,res)=>{
//   console.log(req.body);
// })

app.listen(process.env.PORT, () => {
  console.log("Backend server has started at " + process.env.PORT);
});

// app.post("/register", async (req, res) => {

//     const {username, password} = req.body;

//     const user = await User.findOne({ username, password}).lean();

//     res.json({status: 'ok', data:'dfdfs'})
// });

// app.post("/login", async (req, res) => {
 
//   console.log(req.body);

//   const { email, password } = req.body; 
  
//   const hashPassword =await bcrypt.hash(password, 10);

//   try{
//         const response=await User.create({
//           email, 
//           password:hashPassword,
//         });
//         console.log('user created', response);

//   } catch(error){
//       console.log(error);
//       return res.json({status:'error'});
//   } 
  
//   res.json({status : 200,data:'coming soon'});

// });


//const User = require("./models/user.js");
//const bcrypt = require("bcryptjs");
//const jwt = require("jsonwebtoken");

