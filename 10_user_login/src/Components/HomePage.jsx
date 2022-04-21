import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const HomePage = () => {
    const { isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
        <div className='hero-container'>
            <h1>Please login</h1>
            <h3>See Your Profile</h3>
        </div>
    )
  )
}

export default HomePage