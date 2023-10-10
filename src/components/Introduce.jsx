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
      const charts = document.getElementsByClassName('introduce_chart');
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
    <section id="introduce">
      <div className="wrapper">
        <div className="introduce_text">
          <div 
            className="introduce_title"
            data-aos-once="true">
            <p data-aos="fade-left">
              안녕하세요. 프론트엔드개발자 최진주입니다🖐 <br />
              저는 사용자에 의한, 사용자를 위한 개발을 하고 있습니다. <br />
              어떻게 하면 좋은 코드를 짤 수 있을지 고민하고 설계하려고 합니다.
            </p>
          </div>
          <div className="introduce_info"
            data-aos-once="true"
          >
            <ul
              data-aos="fade-right">
              <li>
                <div className='label'>
                  <span>생년월일</span> 
                </div>
                <div className='text'>
                  1996.10.23 (28세)
                </div>
                </li>
              <li>
                <div className='label'>
                  <span>주소지</span> 
                </div>
                <div className='text'>
                  서울특별시 금천구 가산동
                </div>
              </li>
              <li>
                <div className='label'>
                  <span>학력</span> 
                </div>
                <div className='text'>
                  세명대학교 호텔관광경영학과 졸업
                </div>
              </li>
              <li>
                <div className='label'>
                  <span>교육과정</span> 
                </div>
                <ol className='text'>
                  <li><strong>2021.05</strong> 이젠아카데미 웹디자인&퍼블리셔 과정 수료</li>
                  <li><strong>2023.09</strong> 더조은컴퓨터학원 AWS 웹 프로그래밍 풀스택 과정 수료</li>
                </ol>
              </li>
            </ul>
          </div>
          <div 
            className="introduce_skill"
            data-aos="fade-right"
          >
            <div 
              className="introduce_chart" 
              data-bar-color="#729FE3"
              data-percent="100"
              >
              <p className='skill_name'>
                HTML&CSS 
                <span>
                  (<span className="percent"></span>%)
                </span>
              </p>
            </div>
            <div 
              className="introduce_chart"
              data-bar-color="#8996AB"
              data-percent="60"
            >
              <p className='skill_name'>
                JAVASCRIPT 
                <span>
                  (<span className="percent"></span>%)
                </span>
              </p>
            </div>
            <div 
              className="introduce_chart" 
              data-bar-color="#2F425E"
              data-percent="70"
            >
              <p className='skill_name'>
                React
                <span>
                  (<span className="percent"></span>%)
                </span>
              </p>
            </div>
            <div 
              className="introduce_chart" 
              data-bar-color="#2F425E"
              data-percent="25"
            >
              <p className='skill_name'>
                Vue
                <span>
                  (<span className="percent"></span>%)
                </span>
              </p>
            </div>
            <div 
              className="introduce_chart"
              data-bar-color="#8996AB"
              data-percent="55"
            >
              <p className='skill_name'>
                Git 
                <span>
                  (<span className="percent"></span>%)
                </span>
              </p>
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