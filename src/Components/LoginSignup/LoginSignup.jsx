import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/user.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/padlock.png'

export const LoginSignup = () => {
    const [action,setAction] = useState("Sign up");
  return (
    <div className='container'>
         <div className="header">
          <div className="text">{action}</div>  
          <div className="underline"></div>
        </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
     <img src={user_icon} alt="" />
     <input type="text" placeholder="enter your username" />
    </div>}
      
  
    <div className="input">
     <img src={email_icon} alt="" />
     <input type="email"  placeholder="enter your email id" />
    </div>
    <div className="input">
     <img src={password_icon} alt="" />
     <input type="password"  placeholder="enter your password" />
    </div>
    {action==="Sign up"? <div></div>: <div className="forgot-password">Lost Password?<span>Click Here!</span></div>}
   
    <div className="submit-container">
    <div className={action==="Sign up" ? "submit":"submit gray"}onClick={()=>{setAction("Sign up")}}>Sign up </div>
     <div className={action==="Login" ? "submit": "submit gray"}onClick={()=>{setAction("Login")}}>Login</div>
    </div> 
    </div> 
    </div>
  )
}
