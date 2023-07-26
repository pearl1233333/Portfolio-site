import React from 'react'


function Header() {
  
  return (
    <>
      <div className='wrapper'>
        <div className='logo'>
          <h1>LOGO</h1>
        </div>
        <nav className='nav--menu'>
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">PROJECT</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header