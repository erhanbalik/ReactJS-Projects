import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
      <Link to='/' className='logo'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/ETHEREUM-YOUTUBE-PROFILE-PIC.png/768px-ETHEREUM-YOUTUBE-PROFILE-PIC.png" alt="Cyborg News" />
        <p className='compName'>Cyborg News</p>
        </Link>
        <li>
          <Link to='/currencies'>Market</Link>
        </li>
    </div>
  )
}

export default Footer