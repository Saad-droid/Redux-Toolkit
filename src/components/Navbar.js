import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const item=useSelector((state)=>state.cart)
 
    return (
    <div
    style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }}
>
      <span className='logo'>Store</span>
      <div>
        <Link className='navLink' to ="/"> Home </Link>
        <Link className='navLink' to ="/cart"> Cart </Link>
        <span className='cartCount'>Cart Items:{item.length}</span>
      </div>
    </div>
  )
}
