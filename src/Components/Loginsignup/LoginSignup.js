import React, { useState } from 'react';
import './LoginSignup.css';
import Person from '../Assests/person.png';
import Email from '../Assests/email.png';
import Password from '../Assests/password.png';


const LoginSignup = () => {

    const [action, setaction] =useState("Sign Up");
  return (
    <div>
        <div className='container'>
        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="Log In"?<div></div> :  <div className='input'>
            <img src={Person} alt=''></img>
            <input type='text' placeholder='Name'></input>
          </div>}
          <div className='input'>
            <img src={Email} alt=''></img>
            <input type='Email' placeholder='Email'></input>
          </div>
          <div className='input'>
            <img src={Password} alt=''></img>
            <input type='password' placeholder='Password'></input>
          </div>
          {action === "Sign Up"? <div></div>: <div className='Forget-Password'>Lost Password ?<span>Click Here</span></div>}
          <div className='submit-container'>
          <div className={action === "Sign Up" ? "submit" : "submit grey"} onClick={()=>{setaction("Sign Up")}}>Sign Up</div>
          <div className={action === "Log In" ? "submit" : "submit grey"} onClick={()=>{setaction("Log In")}}>Log In</div>
          </div>

        </div>
        
      </div>

    </div>
  )
}

export default LoginSignup