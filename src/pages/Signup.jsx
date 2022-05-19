import React from 'react'
import { useState } from 'react'
import Navbar from "../components/Navbar";

const Signup = () => {
  const [ firstName , setFirstName] = useState("");
  const [lastName , setLastName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [age , setAge]=useState("");
  const [mobile , setMobile] = useState("")
  

  return (
    <>
    <Navbar/>
      <div className='signup'>
      <div>Sign Up</div>
        <form className="">
          <input type="text" placeholder='First Name' value={firstName} onChange={(e)=> setFirstName(e.target.value)} required />
          <br />
          <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          <br />
          <input type="email" placeholder='Create Email' value={email} onClick={(e)=> setEmail(e.target.value)} required />
          <br />
          <input type="number" placeholder='Age'  value={age} onClick={(e)=>setAge(e.target.value)} required />
          <br />
          <input type="number" placeholder='Mobile Number' value={mobile} onClick={(e)=> setMobile(e.target.value)} required />
          <br />
          <input type="password" placeholder='Create Password' value={password} onClick={(e)=> setPassword(e.target.value)} required />
          <br />
          <input type="checkbox" required />
          <br />
          <button>Sign Up</button>
        </form>
      </div>
    </>
  )
}

export default Signup