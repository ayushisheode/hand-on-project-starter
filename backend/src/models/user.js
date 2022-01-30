/* eslint-disable prettier/prettier */
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({  
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },  
});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);
