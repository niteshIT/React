import { useState } from "react"
import React from 'react'
import './registration.css'

export const Registration = () => {
    const [user, setUser] = useState({
        userName:"",
        email:"",
        password:"",
        phoneNumber:0
      })
      const handleInputChange= (e)=>{
    
        // console.log(e.target.value);
        const {name, value} = e.target;
        setUser((prev)=>({...prev,[name]:value}))
      }
      const handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(user)
      }
    
      return (
        <>
          
          <form onSubmit={handleFormSubmit}>
            <div className="container">
              
            <div className='inputItems'>
              <label htmlFor="userName">
                <b>First Name: </b>
              </label>
              <input type="text" placeholder='Enter Name' name='userName' value={user.userName} onChange={handleInputChange}/>
              </div >
              <div className='inputItems'>
              <label htmlFor="email">
                <b>Email: </b>
              </label>
              <input type="email" placeholder='Enter Email' name='email' value={user.email} onChange={handleInputChange}/>
              </div>
    
              <div  className='inputItems'>
              <label htmlFor="password">
                <b>Password: </b>
              </label>
              <input type="password" placeholder='Enter Password' name='password' value={user.password} onChange={handleInputChange} />
              </div>
              
              <div className='inputItems'>
              <label htmlFor="phoneNumber">
                <b>Phone Number: </b>
              </label>
              <input type="number" placeholder='Enter Phone Number' name='phoneNumber' value={user.phoneNumber} onChange={handleInputChange} />
              </div>
              <button type='submit'>Submit</button>
            </div>
            
    
          </form>
        </>
      )
}
