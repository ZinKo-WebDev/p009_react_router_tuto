import React, { useState } from 'react'
import './Login.css'
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/Auth';
const Login = () => {
  const navigate=useNavigate()
  const auth=useAuth()
  const [ userData, setXuserData]=useState({})
  const location=useLocation()
  const redirectPath=location.state?.path || "/"
  const loginsHandler=(event) => {
    event.preventDefault()
  auth.login(userData)
   console.log(userData)
   console.log(auth)
   navigate(redirectPath,{replace:true})
   
  }

 
  return (
    <div className='loginDiv'>
        <div className="login-container">
            <div className="login-content">
                 <div className="login-content_header">
                   
                    <h2>Create account</h2>
                </div>
            <div>
             <form className="login-form" onSubmit={(event) =>loginsHandler(event) }>
             <input type="text" placeholder="username" onChange={(event) =>setXuserData({...userData,name:event.target.value}) }/>
                <input type="password" placeholder="password" onChange={(event) =>setXuserData({...userData,password:event.target.value})  }/>
                <input type="submit"/>
             </form>
             <div className="login-netoworks">
                 <span>or sign up with</span>
                <ul className="login-icons">
                  <li className='iconsList'>
                  <FaGoogle className='socialIcons' name='google'/>
                  </li>
                  <li className='iconsList'>
                  
                    <FaTwitter className='socialIcons' name='twitter'/>
                  </li>
                  <li className='iconsList'>
                  <FaGithub className='socialIcons'  name='github'/>
                  
                  </li>
                </ul>
            </div>
                 <p>By creating an account you agree to Land Scape's <strong>Terms of Services</strong> and <strong>Privary Policy.</strong></p>
     </div>
  </div>
  <div className="login-footer"></div>
</div>
    </div>
  
  )
}

export default Login