import React, { useState } from 'react'

function Register() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
  return (
    
    <div>
        <div className="container">
            <div className="contact-box">
                <div className="left"></div>
                <div className="right">
                    <h2>ENTER DETAILS</h2>
                        
                    <input id="nameId" type="text" className="field"  onChange={(e) => setName(e.target.value)}  placeholder="Your Name"/>
                    <input id="phoneId" type="tel" className="field"  onChange={(e) => setPhone(e.target.value)}  placeholder="Your Phone" required maxLength="10"/>
                    <input id="passId" type="password" className="field" onChange={(e) => setPassword(e.target.value)} placeholder="Your Password" required />
                    
                    {/* <div>
                        <label className='error-msg'>hi</label>
                    </div> */}
                    <div style={{"margin":"20px"}}>
                        <label  htmlFor="error" id = "labelId"></label>
                    </div>
                    
    
                    <button className="btn" >REGISTER</button>
                    {/* document.getElementById('hello').innerHTML = 'hi'; */}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register