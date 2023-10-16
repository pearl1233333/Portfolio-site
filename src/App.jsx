import { useRef, useEffect, useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Introduce from './components/Introduce'
import Project from './components/Project'
import Footer from './components/Footer'
import MobileMenu from './components/MobileMenu'
import Contact from './components/Contact'
import './css/aos.css';
import AOS from 'aos';

function App() {

  useEffect(() => {
    AOS.init({duration: 1200,});
  }, []);

  const [scrolled, setScrolled] = useState(false);
  const [scrollHeader, setScrollHeader] = useState({
    initial: 100,
    additional: 1500, 
  });

  // 스크롤 이벤트 처리 함수
  const handleScroll = () => {
    setScrolled(window.scrollY >= scrollHeader.initial);

    if (window.scrollY >= scrollHeader.additional) {
      document.getElementById('header').classList.add('scrolled--main');
    } else {
      document.getElementById('header').classList.remove('scrolled--main');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollHeader]);

  return (
    <div id="WRAP">
      <header id='header' className={scrolled ? 'down' : ''}>
        <Header />
        <MobileMenu />
      </header>
      <main>
        <Banner />
        <Introduce />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
