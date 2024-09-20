import React, { useState } from 'react'

export const Login = () => {
    const [login,setLogin]= useState({
        email:'',
        password:''
    })
    const handleLogin=(e)=>{
        // e.preventDefault();
        const {name, value}=e.target;

        setLogin((prev)=>({...prev,[name]:value}));
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(login)
    }
  return (
    <div className="logincontainer">
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
            <div className='grid grid-two--cols'>
                <label htmlFor="email">Email :</label>
                <input type="email" placeholder='Enter Your Email' name='email' value={login.email} onChange={handleLogin} />
           
            
                <label htmlFor="password">Password :</label>
                <input type="password" placeholder='Enter Password' name='password' value={login.password} onChange={handleLogin}/>
            </div>
            <div className='button'>
            <button type='submit'>submit</button>
            </div>
        </form>

    </div>
  )
}
