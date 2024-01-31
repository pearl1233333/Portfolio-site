import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Banner01 from "../images/img_project1.jpg"
import Banner02 from "../images/img_project2.png"
import Banner03 from "../images/img_project3.jpg"
import subProject1 from "../images/img_publishing_project1.jpg"
import subProject2 from "../images/img_publishing_project2.jpg"
import subProject3 from "../images/img_publishing_project3.jpg"
import subProject4 from "../images/img_publishing_project4.jpg"

function Project() {

  
  return (
    <section id="project">
      <div className="wrapper">
        <div className="project_head">
          <h3 data-aos="fade-up-right">PROJECT</h3>
        </div>
        <div className="project_body">
          <article
            className='project_item'
            data-aos-once="true"
          >
            <div className="item_image" data-aos="fade-right">
              <img src={Banner01} alt="술렁술렁 메인 이미지" />
            </div>
            <div className='item_cont' data-aos="fade-left">
              <h3 className='item_title'>술렁술렁<span className='small'> _ 전통주 정보공유 웹 플랫폼 </span></h3>
              <div className='item_details'>
                <div className='item_text'>
                  동기들과 진행한 파이널 프로젝트입니다. 술을 좋아하는 5명의 학생들이 모여 우리나라의 전통주를 널리 알리고자 만든 웹 사이트입니다.
                </div>
                <div className='item_function'>
                  <dl>
                    <dt className='title'>담당</dt>
                    <dd><span>📍</span> 전체페이지 기획 및 설계</dd>
                    <dd><span>📍</span> 전체페이지 디자인&퍼블리싱 및 반응형</dd>
                    <dd><span>📍</span> 메인페이지 랜덤 추천 기능</dd>
                    <dd><span>📍</span> 전통주 전체·카테고리별 검색 페이지</dd>
                    <dd><span>📍</span> 전통주 상세페이지</dd>
                  </dl>
                </div>
                <div className='item_function'>
                  <p className='title'>사용기술</p>
                  <ul className='item_technic'>
                    <li className='hmtl'>HTML5&CSS3</li>
                    <li className='sass'>SASS</li>
                    <li className='js'>Javascript</li>
                    <li className='react'>React</li>
                  </ul>
                </div>           
              </div>
              <div className='item_btn'>
                <div className='btn-group'>
                  <div className='btn-group_inner'>
                    <div className="btn-inner">
                    <Link 
                        to="https://github.com/roalwh/Project-OMDB-Public" 
                        target="_blank"
                        className='btn_github'>깃허브</Link>
                    </div>
                  </div>
                </div>
                <div className='btn-group'>
                  <div className='btn-group_inner'>
                    <div className="btn-inner">
                      <Link 
                        to="http://roalwh.iptime.org:20108/" 
                        target="_blank"
                        className='btn_source'>사이트 바로가기</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article
            className='project_item'
            data-aos-once="true"
          >
            <div className="item_image" data-aos="fade-right">
              <img src={Banner02} alt="술렁술렁 메인 이미지" />
            </div>
            <div className='item_cont' data-aos="fade-left">
              <h3 className='item_title'>날씨 앱<span className='small'> _ 전세계 날씨 정보 앱</span></h3>
              <div className='item_details'>
                <div className='item_text'>
                  OpenWeatherMap api를 활용해 만든 개인프로젝트입니다. 
                </div>
                <div className='item_function'>
                  <dl>
                    <dt className='title'>담당</dt>
                    <dd><span>📍</span> 전체페이지 기획 및 설계</dd>
                    <dd><span>📍</span> 전체페이지 디자인&퍼블리싱 및 반응형</dd>
                  </dl>
                </div>
                <div className='item_function'>
                  <p className='title'>사용기술</p>
                  <ul className='item_technic'>
                    <li className='hmtl'>HTML5&CSS3</li>
                    <li className='react'>React</li>
                    <li className='vercel'>Vercel</li>
                  </ul>
                </div>           
              </div>
              <div className='item_btn'>
                <div className='btn-group'>
                  <div className='btn-group_inner'>
                    <div className="btn-inner">
                    <Link 
                        to="https://github.com/pearlworld/weather-app.git" 
                        target="_blank"
                        className='btn_github'>깃허브</Link>
                    </div>
                  </div>
                </div>
                <div className='btn-group'>
                  <div className='btn-group_inner'>
                    <div className="btn-inner">
                      <Link 
                        to="https://weather-app-pearlworld.vercel.app/" 
                        target="_blank"
                        className='btn_source'>사이트 바로가기</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article
            className='project_item'
            data-aos-once="true"
          >
            <div className="item_image" data-aos="fade-right">
              <img src={Banner03} alt="감정일기장 메인 이미지" />
            </div>
            <div className='item_cont' data-aos="fade-left">
              <h3 className='item_title'>감정일기장</h3>
              <div className='item_details'>
                <div className='item_text'>
                내 감정을 아주 좋음에서 아주 나쁨까지 표시하고 제목과 게시글을 작성하여 리스트 형식으로 한눈에 볼 수 있는 일기장
                </div>
                <div className='item_function'>
                  <dl>
                    <dt className='title'>담당</dt>
                    <dd><span>📍</span> 전체페이지 기획 및 설계</dd>
                    <dd><span>📍</span> 전체페이지 디자인&퍼블리싱 및 반응형</dd>
                  </dl>
                </div>
                <div className='item_function'>
                  <p className='title'>사용기술</p>
                  <ul className='item_technic'>
                    <li className='hmtl'>HTML5&CSS3</li>
                    <li className='react'>React</li>
                    <li className='vercel'>Vercel</li>
                  </ul>
                </div>           
              </div>
              <div className='item_btn'>
                <div className='btn-group'>
                  <div className='btn-group_inner'>
                    <div className="btn-inner">
                    <Link 
                        to="https://github.com/pearlworld/emotion-diary.git" 
                        target="_blank"
                        className='btn_github'>깃허브</Link>
                    </div>
                  </div>
                </div>
                <div className='btn-group'>
                  <div className='btn-group_inner'>
                    <div className="btn-inner">
                      <Link 
                        to="https://emotion-diary-pearworld.vercel.app/" 
                        target="_blank"
                        className='btn_source'>사이트 바로가기</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className='project_card'>
            <h2 
              className='project_card_title'
              data-aos="fade-down"
            >퍼블리싱 프로젝트</h2>
            <div className='project_card_list'>
              <div className='card_inner' data-aos="fade-up">
                <Link
                  to="https://clubclio.co.kr/"
                >
                  <div className="card_image" style={{ backgroundImage: `url(${subProject1})` }}>
                  </div>
                  <div className='card_infos'>
                    <h3 className='info_title'>클리오 공식몰 구축</h3>
                    <p className='info_desc'>
                      모바일 페이지 퍼블리싱 <br />
                      상세, 결제, 회원가입, 마이페이지를 담당하였습니다.
                    </p>
                    <p className='info_cate'>HTML, CSS, JS</p>
                  </div>
                </Link>
              </div>
              <div className='card_inner' data-aos="fade-up">
                <Link
                  to="https://www.hancomtaja.com/"
                  target="_blank"
                >
                  <div className="card_image" style={{ backgroundImage: `url(${subProject2})` }}>
                  </div>
                  <div className='card_infos'>
                    <h3 className='info_title'>
                      한글과컴퓨터 타자연습사이트 리뉴얼 및 타자연습게임, 필사, 멀티게임 구축</h3>
                    <p className='info_desc'>
                      메인페이지와 레이아웃을 제외한 전체페이지 퍼블리싱을 담당하였습니다.<br />
                    </p>
                    <p className='info_cate'>HTML, CSS, JS</p>
                    
                  </div>
                </Link>
              </div>
              <div className='card_inner' data-aos="fade-up">
                <Link
                  to="https://www.kotsa.or.kr/edrone/"
                  target="_blank"
                >
                  <div className="card_image" style={{ backgroundImage: `url(${subProject3})` }}>
                  </div>
                  <div className='card_infos'>
                    <h3 className='info_title'>한국교통안전공단 드론 정보통합시스템</h3>
                    <p className='info_desc'>
                      유지보수 및 QA를 담당하였습니다.
                    </p>
                    <p className='info_cate'>HTML, CSS, JS</p>
                  </div>
                </Link>
              </div>
              <div className='card_inner' data-aos="fade-up">
                <Link
                  to="http://bnbcompany.io/"
                  target="_blank"
                >
                  <div className="card_image" style={{ backgroundImage: `url(${subProject4})` }}>
                  </div>
                  <div className='card_infos'>
                    <h3 className='info_title'>비엔비컴퍼니 웹사이트 구축</h3>
                    <p className='info_desc'>
                      자사 반응형 웹사이트 퍼블리싱 담당하였습니다.
                    </p>
                    <p className='info_cate'>HTML, CSS, JS</p>
                    
                  </div>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Project