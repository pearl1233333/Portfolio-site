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

  const [scrolled, setScrolled] = useState(false);
  const [scrollThreshold, setScrollThreshold] = useState(200); // 사용자가 정하는 스크롤 위치 값

  // 스크롤 이벤트 처리 함수
  const handleScroll = () => {
    setScrolled(window.scrollY >= scrollThreshold);
  };

  // 컴포넌트가 마운트되거나 업데이트될 때 스크롤 이벤트 리스너를 등록/해제합니다.
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollThreshold]);

  return (
    <div id="WRAP">
      <header id='header' className={scrolled ? 'down' : ''}>
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
