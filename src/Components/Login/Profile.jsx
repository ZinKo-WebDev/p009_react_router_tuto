import React from 'react'
import { useAuth } from '../Auth/Auth'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate=useNavigate()
  const auth=useAuth()
  const handleLogout=() => {
    auth.logout()
    navigate("/")
  }
  console.log(auth)
  return (
    <div>
      <h1>Profile Page</h1>
      <h3>Welcome User : {auth.user.name}</h3>
      
   <button onClick={() => handleLogout()}>LogOut</button>
    </div>
  )
}

export default Profile