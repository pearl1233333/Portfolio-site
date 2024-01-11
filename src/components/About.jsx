import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import person from "../images/img_person.jpg" 

function About() {
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

  return (
    <section id="about">
      <div className="wrapper">
        <div className="about_text">
          <div 
            className="about_title"
            data-aos="fade-right">
            <p>
              안녕하세요. 저는 퍼블리셔 출신의 프론트엔드 개발자로, <br/>
              사용자들이 편리하게 이용할 수 있는 직관적이고 간편한 인터페이스를 <br />
              설계하고 개발하는 것을 즐깁니다.
            </p>
            <p>
              퍼블리싱 프로젝트에서의 경험은 제가 사용자들의 요구에 민감하게 대응하고, <br />
              높은 품질의 인터페이스를 만들 수 있게 해주었습니다. 이러한 경험을 <br />
              바탕으로, 프론트엔드 개발 과정에서도 사용자 경험을 항상 우선시하며 기능을 <br />
              개발하고 있습니다.
            </p>
          </div>
          <div className="about_info"
            data-aos-once="true"
          >
            <ul
              data-aos="fade-right">
              <li>
                <div className='label'>
                  <span>생년월일</span> 
                </div>
                <div className='text'>
                  1996.10.23 (만 27세)
                </div>
              </li>
              <li>
                <div className='label'>
                  <span>교육과정</span> 
                </div>
                <ol>
                  <li className='text'><strong>2023.09</strong> 더조은컴퓨터학원 AWS 웹 프로그래밍 풀스택 과정 수료</li>
                  <li className='text'><strong>2021.05</strong> 이젠아카데미 웹디자인&퍼블리셔 과정 수료</li>
                  {/* <li>
                    <span>2021.05</span> 
                    <p>이젠아카데미 웹디자인&퍼블리셔 과정 수료</p>
                  </li>
                  <li>
                    <span>2023.09</span>
                    <p>더조은컴퓨터학원 AWS 웹 프로그래밍 풀스택 과정 수료</p>
                  </li> */}
                </ol>
              </li>
              <li>
                <div className='label'>
                  <span>학력</span> 
                </div>
                <div className='text'>
                  세명대학교 호텔관광경영학과 졸업
                </div>
              </li>
            </ul>
          </div>
          <div 
            className='about_btn'
            data-aos="fade-right"
          >
            <Link 
              to="https://drive.google.com/file/d/125eAg4OLvYsYP4_4csczBMf329TOWm12/view?usp=sharing"
              target="_blank">
              입사지원서 보기
            </Link>
          </div>
        </div>
        <div className="about_img" data-aos="fade-left">
          <img src={person} alt="최진주 증명사진" />
        </div>
      </div>
    </section>
  )
}

export default About