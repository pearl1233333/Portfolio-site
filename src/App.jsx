import { useRef, useEffect, useState } from 'react'
import Header from './components/header'
// import Banner from './components/Banner'
import Introduce from './components/Introduce'
import Project from './components/Project'
import Footer from './components/Footer'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './css/aos.css';
import AOS from 'aos';

function App() {

  useEffect(() => {
    AOS.init({duration: 1200,});
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.scroll-text.first p', {
      y: '-100%',
      scrollTrigger: {
        trigger: '.scroll-text.first',
        scroller: '#smooth-wrapper',
        scrub: true,
      },
    });

    gsap.to('.scroll-text.second p', {
      y: '-100%',
      scrollTrigger: {
        trigger: '.scroll-text.second',
        scroller: '#smooth-wrapper',
        scrub: true,
      },
    });
    
    gsap.set(".scroll-text", {
      yPercent: -150,
      opacity: 1
    });

  }, []);

  const listHTML = "The spectacle<br />before us was<br />indeed <span className='title-name'>sublime</span>";
  const listItems = listHTML.split("<br />");

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="WRAP">
        <Header />
        <section className="main_banner">
          <div className="main_title">
          <div className="main_title_inner">
              {listItems.map((line, index) => (
                <div key={index} className="title-mask">
                  <span className="title-line" dangerouslySetInnerHTML={{ __html: line }} />
                </div>
              ))}
            </div>
          </div>
          <div className="scroll-text first" data-speed="1.3">
            <p data-speed="auto">text1</p>
          </div>
          <div className="scroll-text second" data-speed="1.5">
            <p data-speed="auto">text2</p>
          </div>
        </section>
        <Introduce />
        <Project />
        <Footer />
      </div>
    </div>
  )
}

export default App
