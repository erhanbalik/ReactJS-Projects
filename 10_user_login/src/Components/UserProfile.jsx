import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserProfile = () => {
    const {user, isAuthenticated, logout} =useAuth0();

  return (
        isAuthenticated && (
        <div className='user-profile-page'>
            <div>
              <button onClick={() => logout()} className='btn logout-button'>Log Out</button>
            </div>
            <div className='userInfo-container'>
              <img src={user.picture} alt={user.given_name} />
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <ul className='list-cont'>
                <li>Gallery</li>
                <li>Settings</li>
                <li>Account</li>
                <li>Documents</li>
              </ul>
            </div>
        </div>
    )
  )
}

export default UserProfile