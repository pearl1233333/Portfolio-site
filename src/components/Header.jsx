import React from 'react'


function Header() {
  
  return (
    <>
      <div className='wrapper'>
        <div className='logo'>
          <h1>PEARL</h1>
        </div>
        <nav className='nav--menu'>
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#project">PROJECT</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header