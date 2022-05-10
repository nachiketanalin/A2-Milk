import React, { useState } from 'react'
import AdminPg from './AdminPg';
import Login from './Login'
import Navbar from './Navbar'

function Home() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  console.log(isLoggedIn)
  if (!isLoggedIn)
    return <Login checkLogin = {isLoggedIn} f = {setLoggedIn}/>
  return (
    <AdminPg / >
  )
}

export default Home