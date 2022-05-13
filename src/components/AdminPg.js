import React from 'react'
import Navbar from './Navbar'
import Register from './Register'
import { useContext, createContext } from 'react';
import UserContext from '../contexts/UserContext';

function AdminPg(props) {
  let {token,setToken} = useContext(UserContext);
  console.log(token);
  return (
    <div>
        <Navbar/>
        <Register/>
    </div>
  )
}

export default AdminPg