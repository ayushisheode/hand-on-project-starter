import React from 'react';
import axios from 'axios';
import {useState} from 'react';
//import {Alert} from 'react-alert';

const Register = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const signinHandler=async ()=>{
        try{
            const data={
                email,
                password
            }
            const response = await axios.post("http://localhost:5000/register",data);
            console.log(response);
        }catch(e){
            console.log(e);
        }
    }    

  return (
    <div className="register">
         <div className="regNav">
         </div>

         <div className="regForm">
                    <form>
                        <h2>Create account</h2>
                        <label>
                            Email: <input type="email" name="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </label>
                        <label>
                            Password: <input type="password" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </label>
                        
                        <button type="submit" onClick={signinHandler}>Signup</button>
                        
                    </form>
        </div>              
    </div>
    );
};

export default Register;
