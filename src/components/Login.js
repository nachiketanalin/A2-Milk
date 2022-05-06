import React, { useState } from 'react'
import '../css/login.css'
function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(){
      console.log(email,password);
      // let item = {email, password}

  }

  return (
    <div>
        <div className="container">
            <div className="contact-box">
                <div className="left"></div>
                <div className="right">
                    <h2>ENTER DETAILS</h2>
                    <input type="text" className="field" onChange={(e) => setEmail(e.target.value)} placeholder="Your Phone" />
                    <input type="password" className="field" onChange={(e) => setPassword(e.target.value)} placeholder="Your Password" />
                    <button className="btn" onClick={login}>LOGIN</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login