import React from 'react'
import { useState } from 'react'
import Navbar from "../components/Navbar";


const Login = () => {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("") ;
  return (
    <>
    <Navbar/>
      <div  className='Login' >
      <form className="login_form">
      <h1>Registration</h1>
       
        
       <input type="email" placeholder='Enter Email' value={email} onChange={(e)=> setEmail(e.target.value)}  />
        <br />
        <input type="password" placeholder='Enter Password' value={password} onChange={(e)=> setPassword (e.target.value)} />
        <br />
        <button>Click Me</button>
       </form>
      </div>
    
    </>
    
  )
  
}

export default Login

