import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate()
    const placeOrderHandler=(event) => {
        event.preventDefault()
        navigate("/order-summary")
    }
  return (
    <div>
        <h1>Home Page</h1>
        <button className="btnOrder" onClick={(event) => placeOrderHandler(event)}>Place Order</button>
    </div>
  )
}

export default Home