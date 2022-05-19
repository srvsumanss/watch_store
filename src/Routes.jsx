import React from 'react'
import { Routes ,Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Product from './pages/Products';
import Filter from './pages/Filter';
const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Products' element={<Product/>}></Route>
        <Route path='/Filter' element={<Filter/>}></Route>
    </Routes>

  )
}

export default Router