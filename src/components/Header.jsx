import React from 'react'


function Header() {
  return (
    <header id='header'>
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
        <nav className="nav--mobile">
          <div className="nav--mobile_icon">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </nav>
        <div className="nav">
          <div className="nav__content">
            <ul className="nav__list">
              <li className="nav__list-item">Home</li>
              <li className="nav__list-item">About</li>
              <li className="nav__list-item">Projects</li>
              <li className="nav__list-item">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header