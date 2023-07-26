import { useRef, useEffect, useState } from 'react'
import Header from './components/header'
import Banner from './components/Banner'
import Introduce from './components/Introduce'
import Project from './components/Project'
import Footer from './components/Footer'
import MobileMenu from './components/MobileMenu'
import BgText from './components/BgText'

import './css/aos.css';
import AOS from 'aos';

function App() {

  useEffect(() => {
    AOS.init({duration: 1200,});
  }, []);


  return (
    <div className="WRAP">
      <header id='header'>
        <Header />
        <MobileMenu />
      </header>
      <main>
        <Banner />
        <BgText />
        <Introduce />
        <Project />
      </main>
      <Footer />
    </div>
  )
}

export default App
