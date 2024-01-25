import React from 'react'
import { useSelector } from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'

export default function Navbar() {
    const item=useSelector((state)=>state.cart)
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
 
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
     {  isAuthenticated&& <Link className='navLink' to ="/home"> Home </Link>}
        <Link className='navLink' to ="/cart"> Cart </Link>
        <span className='cartCount'>Cart Items:{item.length}</span>
        {isAuthenticated && <span className='navLink'>Hi ,{user.name}</span>}
       { isAuthenticated  ?  <button  className='navLink' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button> : null
          }
          
      </div>
    </div>
  )
}
