import { useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function BgText() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.scroll-text.first p', {
      y: '-120%',
      opacity: 1,
      scrollTrigger: {
        trigger: '.scroll-text.first',
        scroller: '#smooth-wrapper',
        scrub: true,
        smooth: 1,
        normalizeScroll: true, 
        ignoreMobileResize: true,
        effects: true,
        preventDefault: true
      },
    });

    gsap.to('.scroll-text.second p', {
      y: '-120%',
      opacity: 1,
      scrollTrigger: {
        trigger: '.scroll-text.second',
        scroller: '#smooth-wrapper',
        scrub: true,
        smooth: 1,
        normalizeScroll: true, 
        ignoreMobileResize: true,
        effects: true,
        preventDefault: true
      },
    });
    
    gsap.set(".scroll-text", {
      yPercent: -150,
      opacity: 1
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div>
      <div>
        <div className="scroll-text first" data-speed="1.3">
          <p data-speed="auto">WEB</p>
        </div>
        <div className="scroll-text second" data-speed="1.5">
          <p data-speed="auto">Dev</p>
        </div>
      </div>
    </div>
  )
}

export default BgText
