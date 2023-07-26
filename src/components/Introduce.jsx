import React, { useEffect, useState } from 'react';
import EasyPieChart from 'easy-pie-chart';

function Introduce() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const positionTop = window.scrollY;
      if (positionTop >= 600 && !isScrolled) {
        setIsScrolled(true);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  useEffect(() => {
    if (isScrolled) {
      const charts = document.getElementsByClassName('chart');
      Array.from(charts).forEach((chart) => {
        const barColor = chart.dataset.barColor;
        createChart(chart, barColor);
      });
    }
  }, [isScrolled]);

  function createChart(chartElement, barColor) {
    new EasyPieChart(chartElement, {
      barColor: barColor,
      trackColor: '#fff',
      scaleColor: 'transparent',
      lineCap: 'round',
      lineWidth: 10,
      size: 100,
      animate: 2000,
      onStep: function(from, to, percent) {
        this.el.querySelector('.percent').innerText = Math.round(percent);
      }
    });
  }

  return (
    <section className="introduce">
      <div className="wrapper">
        <div className="introduce_text">
          <div className="introduce_title">
            <p>텍스트</p>
          </div>
          <div className="introduce_info"
            data-aos-once="true"
          >
            <ul data-aos="fade-right">
              <li>📌 Lorem ipsum dolor sit, amet consectetur.</li>
              <li>📌 adipisicing elit. Perspiciatis impedit similique nesciunt incidunt in veniam iure, enim officiis, perferendis culpa veritatis, expedita inventore praesentium ipsam magnam pariatur alias adipisci necessitatibus.</li>
              <li>📌 Perspiciatis impedit similique.</li>
            </ul>
          </div>
          <div 
            className="introduce_skill"
            data-aos="fade-right"
          >
            <div 
              className="chart" 
              data-bar-color="#729FE3"
              data-percent="65">
              <span className="percent">0</span>
            </div>
            <div 
              className="chart"
              data-bar-color="#8996AB"
              data-percent="35"
            >
              <span className="percent">0</span>
            </div>
            <div 
              className="chart" 
              data-bar-color="#2F425E"
              data-percent="80"
            >
              <span className="percent">0</span>
            </div>
          </div>
        </div>
        <div className="introduce_img" data-aos="fade-left">
          <img src="https://image.mediapen.com/news/202103/news_605667_1614652226_m.jpg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Introduce