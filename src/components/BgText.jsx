import { useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function BgText() {

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

    ScrollTrigger.refresh();
  }, []);

  return (
    <div>
      <div>
        <div className="scroll-text first" data-speed="1.3">
          <p data-speed="auto">text1</p>
        </div>
        <div className="scroll-text second" data-speed="1.5">
          <p data-speed="auto">text2</p>
        </div>
      </div>
    </div>
  )
}

export default BgText
