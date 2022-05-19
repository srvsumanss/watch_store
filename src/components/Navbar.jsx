import React from 'react';

import { Link } from 'react-router-dom';
import  styles  from './Navbar.modules.css';



 const Navbar = () => {
  return (
    <div className='Navbar'>
      <Link to={"/"}>Home</Link>
      <Link to={"/Login"}>Login</Link>
      <Link to={"/Signup"}>Signup</Link>
      <Link to={"/Products"}>Products</Link>
      </div>
  )
}
export default Navbar