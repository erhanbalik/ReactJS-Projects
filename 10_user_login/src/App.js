import React from 'react'
import LoginButton from './Components/LoginButton'
import UserProfile from './Components/UserProfile'
import { useAuth0 } from '@auth0/auth0-react'
import HomePage from './Components/HomePage'

const App = () => {
    const {isLoading} = useAuth0();

    if (isLoading) return <div className='loading-page'>Loading...</div>

  return (
    <div className='home-container'>
        <LoginButton />
        <HomePage />
        <UserProfile />
    </div>
  )
}

export default App