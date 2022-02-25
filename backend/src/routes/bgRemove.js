/* eslint-disable prettier/prettier */
const express = require("express");
const router = express.Router();
const axios = require("axios");
const FormData = require('form-data');
const dotenv = require("dotenv");

dotenv.config();

router.post("/upload", async (req, res) => {
  const{ image } = req.body;
  //console.log(image);
  const imageData=image ? image.substring(image.indexOf(",")+1) : '' ;
  //console.log(imageData);
  const formData = new FormData();
  formData.append("size", "auto");
  formData.append("image_file_b64", imageData);
  
  axios({
    method: "post",
    url: "https://api.remove.bg/v1.0/removebg",
    data: formData,
    headers: {
      ...formData.getHeaders(),
      "X-Api-Key": process.env.API_KEY,
      Accept: "application/json",
    },
    
      "errors": [
        {
          "title": "Missing API Key",
        }
      ],

      
    
    encoding: null,
  })
    .then((response) => {
      console.log(response);
      console.log("success");
      return res.status(200).json({
        image: response.data.data.result_b64,
      })
    })
    .catch((error) => {
      if (error.response.status == 400) {
        return console.error("File too large");
      }
      return console.error("Request failed:", error);
    });
  
});
module.exports = router;