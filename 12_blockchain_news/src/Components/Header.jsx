import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-container'>
      <Link to='/' className='logo'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/ETHEREUM-YOUTUBE-PROFILE-PIC.png/768px-ETHEREUM-YOUTUBE-PROFILE-PIC.png" alt="Cyborg News" />
        <p>Cyborg News</p>
        </Link>
      <div className='header-menu'>
        <li>
          <Link to='/favorite'>Favorite</Link>
        </li>
        <li>
          <Link to='/currencies'>Market</Link>
        </li>
      </div>
    </div>
  )
}

export default Header