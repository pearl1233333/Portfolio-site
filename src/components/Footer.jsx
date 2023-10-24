import React from 'react'
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer id="footer">
      <div className="wrapper">
          <div className="contact">
            <Link 
              to="https://github.com/pearl1233333" 
              className="ico_github" 
              target="_blank"
            />
          </div>
          <p className="copyright">© 2023. Choi Jin Ju. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer