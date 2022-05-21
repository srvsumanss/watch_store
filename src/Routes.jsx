import React from 'react'
import { Routes ,Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Product from './pages/Products';
import Filter from './pages/Filter';
// import Cart from './pages/Cart';
// import Card from './pages/Card';
const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Products' element={<Product/>}></Route>
        <Route path='/Filter' element={<Filter/>}></Route>
        {/* <Route path='/Cart' element={<Cart/>}></Route> */}
        {/* <Route path='/Card' element={<Card/>}></Route> */}
    </Routes>

  )
}

export default Router