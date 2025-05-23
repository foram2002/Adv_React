import React from 'react'
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <NavLink className={(e)=>{return e.isActive?"red":""}} to="/home"><li>Home</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red":""}} to="/about"><li>About</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red":""}} to="/contact"><li>Contact Us</li></NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar