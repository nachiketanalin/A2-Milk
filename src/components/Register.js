import React, { useState, useContext } from 'react'
import axios from "axios"
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import { createContext } from 'react';
import UserContext from '../contexts/UserContext';


function Register(props) {
    let {token,setToken} = useContext(UserContext);

    //console.log(`${user}`);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const register = async()=>{
        try{
            let res=await axios({
               method: 'post',
               url: 'http://13.233.39.88:4000/admin/create-user',
               headers: {
                    "auth":token,    
                   "Content-Type": "application/json",
                   "Accept": "application/json"
               }, 
               data: {
                    "phone": phone,
                    "name": name,
                    "type": "customer"
               }
             });
             
            console.log(res);
            if (res.status === 200)
                console.log("User Created !");
        }
        catch(error){
                //props.f(false);
                
                console.log("User Not Created !");
                
        }
      }



  return (
    
    <div>
        <div className="container">
            <div className="contact-box">
                <div className="left"></div>
                <div className="right">
                    <h2>ENTER DETAILS</h2>
                    
                    <input id="nameId" type="text" className="field"  onChange={(e) => setName(e.target.value)}  placeholder="Your Name"/>
                    <input id="phoneId" type="tel" className="field"  onChange={(e) => setPhone(e.target.value)}  placeholder="Your Phone" required maxLength="10"/>
                    
                    {/* <div>
                        <label className='error-msg'>hi</label>
                    </div> */}
                    <div style={{"margin":"20px"}}>
                        <label  htmlFor="error" id = "labelId"></label>
                    </div>
                    
    
                    <button className="btn" onClick={register} >REGISTER</button>
                    {/* document.getElementById('hello').innerHTML = 'hi'; */}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register