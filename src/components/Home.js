import React, { useState } from 'react'
import AdminPg from './AdminPg';
import Login from './Login'
import Navbar from './Navbar'
import { useContext, createContext } from 'react';
import UserContext from '../contexts/UserContext';


function Home() {
  //const [token, setToken] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  console.log(isLoggedIn)
  if (!isLoggedIn)
    return <Login checkLogin = {isLoggedIn} f = {setLoggedIn}  />
  //console.log(token,"<-token u lookin for");
  // let a = {
  //   auth_token:token
  // }
  return (
    <AdminPg />
  )
}

export default Home