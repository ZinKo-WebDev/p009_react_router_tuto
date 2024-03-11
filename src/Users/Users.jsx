import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'

const Users = () => {
    const [searchParams,setSearchParams]=useSearchParams()
    const showActiveUsers=searchParams.get("filter")==="active"
  return (
    <div>
        <h3>User 1</h3>
        <h3>User 2</h3>
        <h3>User 3</h3>
        <Outlet></Outlet>
        <div className="usersBtn">
            <button className="btn act" onClick={() => setSearchParams({filter:"active"})}>Active Users</button>
            <button className="btn rst" onClick={() => setSearchParams({})}>Reset Filter</button>
        </div>
        {
            showActiveUsers?<div>Showing Active Users</div>:<div>Showing All Users</div>
        }
    </div>
  )
}

export default Users