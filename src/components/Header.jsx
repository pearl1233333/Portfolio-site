import React from 'react'
import { HashLink } from 'react-router-hash-link';

function Header() {
  
  return (
    <>
      <div className='wrapper'>
        <div className='logo'>
          <h1>PEARL</h1>
        </div>
        <nav className='nav--menu'>
          <ul>
            <li><HashLink smooth to="#home">HOME</HashLink></li>
            <li><HashLink smooth to="#about">ABOUT</HashLink></li>
            <li><HashLink smooth to="#project">PROJECT</HashLink></li>
            <li><HashLink smooth to="#contact">CONTACT</HashLink></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header