import React from 'react'
import {useParams} from 'react-router-dom'
const UserDatails = () => {
    const params=useParams()
    const userId=params.userId
  return (
    <div>
        <h1>User Details {userId}</h1>
    </div>
  )
}

export default UserDatails