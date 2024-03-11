import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
    const navigate=useNavigate()
    const goHomeHandler=(event) => {
        event.preventDefault()
        navigate("/")

    }
  return (
    <div>
        <h1>Order Confirmed</h1>
        <button className="goHomeBtn" onClick={(event) => goHomeHandler(event)}>Go Back To Home</button>
    </div>
  )
}

export default OrderSummary