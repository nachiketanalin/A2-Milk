import React, { useState } from 'react'
import '../css/login.css'
import axios from "axios"


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async()=>{
    try{
        let res=await axios({
           method: 'post',
           url: 'http://13.233.39.88:4000/user/login',
           headers: {
               "Content-Type": "application/json",
               "Accept": "application/json"
           }, 
           data: {
               "phone": email,
               "password": password
           }
         });
        console.log(res);
        if (res.data.type === "admin"){
            console.log("admin is here !");
            const e1=document.getElementById("phoneId");
            const e2=document.getElementById("passId");
            
            e1.classList.add("invisible");
            e2.classList.add("invisible");
        }
        else{

            // const e1=document.getElementById("phoneId");
            // const e2=document.getElementById("passId");
            
            // e1.classList.add("visible");
            // e2.classList.add("visible");
            // firstNameField.classList.add("invalid");

            console.log("hacker is here !");
        }
    }
    catch(error){
            const e3=document.getElementById("phoneId");
            const e4=document.getElementById("passId");
            
            e3.classList.add("visible");
            e4.classList.add("visible");
            console.log("Wrong Credentials admin !");

            var e5 = document.getElementById("labelId");
            e5.innerHTML = "hi"

    }
  }
  

  return (
    <div>
        <div className="container">
            <div className="contact-box">
                <div className="left"></div>
                <div className="right">
                    <h2>ENTER DETAILS</h2>
                    <input id="phoneId" type="text" className="field" onChange={(e) => setEmail(e.target.value)} placeholder="Your Phone" required maxLength="10"/>
                    <input id="passId" type="password" className="field" onChange={(e) => setPassword(e.target.value)} placeholder="Your Password" required />
                    <label htmlFor="error" id = "labelId">yo</label>
                    <button className="btn" onClick={login}>LOGIN</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login