import { useState } from 'react'

function MobileMenu() {
  const [ isActive, setIsActive ] = useState(false);

  const handleNav = () => {
    setIsActive(!isActive);
  
    if (!isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  const handleMenuItemClick = () => {
    setIsActive(false);
    document.body.style.overflow = 'auto';
  }

  return (
    <>
      <nav className='nav--mobile'>
        <div 
          className={`nav--mobile_btn ${isActive ? 'active' : ''}`} 
          onClick={handleNav}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        {
          isActive ?
            <div className="nav--mobile__menu">
              <div className="nav__content">
                <ul className="nav__list">
                  <li className="nav__list-item">
                    <a href="#home" onClick={handleMenuItemClick}>HOME</a>
                    </li>
                  <li className="nav__list-item">
                    <a href="#about" onClick={handleMenuItemClick}>ABOUT</a>
                    </li>
                  <li className="nav__list-item">
                    <a href="#project" onClick={handleMenuItemClick}>PROJECT</a>
                    </li>
                  <li className="nav__list-item">
                    <a href="#contact" onClick={handleMenuItemClick}>CONTACT</a>
                    </li>
                </ul>
              </div>
            </div> : false
        }
      </nav>
    </>
  )
}

export default MobileMenu