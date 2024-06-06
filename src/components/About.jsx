import { useEffect, useState } from 'react'
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
              안녕하세요. 저는 퍼블리셔 경력이 있는 프론트엔드 개발자입니다. <br />
              사용자들이 편리하고 직관적으로 이용할 수 있는 인터페이스를 설계하고 개발하는 데에 <br />열정을 가지고 있습니다. 퍼블리싱 프로젝트에서 쌓은 경험을 통해 사용자 요구에 <br />민감하게 대응하며, 높은 품질의 결과물을 만들어낼 수 있는 능력을 갖추게 되었습니다. <br />이러한 경험을 바탕으로, 프론트엔드 개발자로서 더 나은 사용자 경험을 제공하며, <br />새로운 도전에 적극적으로 임하고자 합니다.
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
              to="https://drive.google.com/file/d/1WhGwItezttl_x8kxwUrSmhx-SsYj93Gs/view?usp=sharing"
              target="_blank">
              입사지원서 보기
            </Link>
            <Link 
              to="https://drive.google.com/file/d/1InM4n54Rqt0sSexFL6ElJxHAYpE0lOsv/view?usp=drive_link"
              target="_blank">
              경력기술서 보기
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