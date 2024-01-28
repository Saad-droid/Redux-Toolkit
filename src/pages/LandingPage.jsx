import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'
const LandingPage = () => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
      This is landing page
     { isAuthenticated? null: <button className='log-btn' onClick={() => loginWithRedirect()}>Log In</button>}
    </div>
  )
}

export default LandingPage
