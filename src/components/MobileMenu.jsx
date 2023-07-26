import { useState } from 'react'

function MobileMenu() {
  const [ isActive, setIsActive ] = useState(false);

  const handleNav = () => {
    setIsActive(!isActive);
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
                  <li className="nav__list-item">Home</li>
                  <li className="nav__list-item">About</li>
                  <li className="nav__list-item">Projects</li>
                  <li className="nav__list-item">Contact</li>
                </ul>
              </div>
            </div> : false
        }
      </nav>
    </>
  )
}

export default MobileMenu