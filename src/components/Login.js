import React, { useEffect, useState } from 'react'
import '../css/login.css'
import axios from "axios"
import { createContext, useContext} from 'react';
import UserContext from '../contexts/UserContext';




// 8811881177
// tjNzH

function Login(props) {

    let {token,setToken} = useContext(UserContext);
//   useEffect(() => {
//     props.f(true);
//   }, []);

  
//   console.log(props.checkLogin);
    // props.checkLogin = true;

  let s=0;
  
  const [phone, setPhone] = useState("");
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
               "phone": phone,
               "password": password
           }
         });
        console.log(res);
        //console.log(res.data.auth_token);
        const x=res.data.auth_token;
        console.log(typeof(res.data.auth_token));
        //props.setToken(x.toString());
        if (res.data.type === "admin"){
            // useEffect(() => {
                props.f(true);
                setToken(x);
                //props.s(x);
            //   }, []);
            console.log("admin is here !");
            s=1;
            const e = document.getElementById('labelId').innerHTML = 'Correct Crendentials !';
        }
        else{
            s=0;
            console.log("hacker is here !");
        }
    }
    catch(error){
            props.f(false);
            
            s=0;
            console.log("Wrong Credentials admin !");
            const e = document.getElementById('labelId').innerHTML = 'Wrong Crendentials !'; 
    }
    const e1=document.getElementById("phoneId");
    const e2=document.getElementById("passId");
    if(s===0){
        e1.style.border='2px solid red';
        e2.style.border='2px solid red';
    }
    else{
        e1.style.border='2px solid rgba(0, 0, 0, 0)';
        e2.style.border='2px solid rgba(0, 0, 0, 0)';
    }
  }
  

  return (
    <div>
        <div className="container">
            <div className="contact-box">
                <div className="left"></div>
                <div className="right">
                    <h2>ENTER DETAILS</h2>
                        
                    <input id="phoneId" type="tel" className="field"  onChange={(e) => setPhone(e.target.value)}  placeholder="Your Phone" required maxLength="10"/>
                    <input id="passId" type="password" className="field" onChange={(e) => setPassword(e.target.value)} placeholder="Your Password" required />
                    
                    {/* <div>
                        <label className='error-msg'>hi</label>
                    </div> */}
                    <div style={{"margin":"20px"}}>
                        <label  htmlFor="error" id = "labelId"></label>
                    </div>
                    
    
                    <button className="btn" onClick={login}>LOGIN</button>
                    {/* document.getElementById('hello').innerHTML = 'hi'; */}


                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login