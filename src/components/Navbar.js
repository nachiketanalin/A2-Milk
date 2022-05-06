import React from 'react'
import '../css/navbar.css'

function Navbar() {
  return (
    <div>
        <nav>
            <ul className="menu">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Payments</a></li>
                <li><a href="#">Notifications</a></li>
                <li><a href="#">Milk Rescheduling Approval</a></li>
                <li><a href="#">Assignment Management</a></li>
                <li><a href="#">Reports</a></li>
            </ul>
            <a href="#" className="reg">REGISTRATION</a>
        </nav>

    </div>
  )
}

export default Navbar