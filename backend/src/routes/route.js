/* eslint-disable prettier/prettier */

const express = require('express');
const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk';

router.post('/register', async(req,res)=>{
    console.log(req.body);

    const { email, password } = req.body; 
    
    const hashPassword =await bcrypt.hash(password, 10);
  
    try{
          const response=await User.create({
            email, 
            password:hashPassword,
          });
          console.log('user created', response);
  
    } catch(error){
        console.log(error);
        return res.json({status:'error'});
    } 
    
    res.json({status : 200,data:'coming soon'});
  
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
	const user = await User.findOne({ email }).lean()

	if (!user) {
    console.log('invalid email/password');
		return res.json({ status: 'error', error: 'Invalid email/password' })
	}

	if (await bcrypt.compare(password, user.password)) {
		// the email, password combination is successful

		const token = jwt.sign(
			{
				id: user._id,
				email: user.email
			},
			JWT_SECRET
		)
    console.log('success');
		return res.json({ status: 'ok', data: token })
	}
 
  console.log('invalid email/password');
	res.json({ status: 'error', error: 'Invalid email/password' })
});

module.exports = router;


