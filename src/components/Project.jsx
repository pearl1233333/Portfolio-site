import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Banner01 from "../images/img_project1.jpg"
import Banner02 from "../images/img_project2.png"

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
              <h3 className='item_title'>술렁술렁<span> _ 전통주 정보공유 웹 플랫폼 </span></h3>
              <div className='item_details'>
                <div className='item_text'>
                  동기들과 진행한 파이널 프로젝트입니다. 술을 좋아하는 5명의 학생들이 모여 우리나라의 전통주를 널리 알리고자 만든 웹 사이트입니다.
                </div>
                <div className='item_function'>
                  <dl>
                    <dt className='title'>담당</dt>
                    <dd><span>📍</span> 전체페이지 기획 및 설계</dd>
                    <dd><span>📍</span> 전체페이지 디자인&퍼블리싱 및 반응형</dd>
                    <dd><span>📍</span> 메인페이지</dd>
                    <dd><span>📍</span> 전통주 전체·카테고리별 검색</dd>
                  </dl>
                </div>
                <div className='item_function'>
                  <p className='title'>사용기술</p>
                  <ul className='item_technic'>
                    <li className='hmtl'>HTML5&CSS3</li>
                    <li className='sass'>SASS</li>
                    <li className='js'>Javascript</li>
                    <li className='react'>React</li>
                    <li className='maria'>Maria DB</li>
                    <li className='java'>Java</li>
                    <li className='sb'>SpringBoot</li>
                    <li className='jpa'>JPA</li>
                  </ul>
                </div>           
              </div>
              <div className='item_btn'>
                <div className='btn-group'>
                  <div className='btn-group_inner'>
                    <div className="btn-inner">
                    <Link 
                        to="https://github.com/roalwh/Project-OMDB-Public" 
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
                        className='btn_source'>소스</Link>
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
              <h3 className='item_title'>날씨 앱<span> _ 전세계 날씨 정보 앱</span></h3>
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
                        to="https://github.com/pearl1233333/weather-app.git" 
                        className='btn_github'>깃허브</Link>
                    </div>
                  </div>
                </div>
                <div className='btn-group'>
                  <div className='btn-group_inner'>
                    <div className="btn-inner">
                      <Link 
                        to="https://weather-c4sdpz0rl-pearl1233333.vercel.app" 
                        target="_blank"
                        className='btn_source'>소스</Link>
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
              <img src={Banner01} alt="술렁술렁 메인 이미지" />
            </div>
            <div className='item_cont' data-aos="fade-left">
              <h3 className='item_title'>감정일기장</h3>
              <div className='item_details'>
                <div className='item_text'>
                내 감정을 1에서 5까지 표시하고 제목과 게시글을 작성하여 리스트 형식으로 한눈에 볼 수 있는 일기장
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
                  </ul>
                </div>           
              </div>
              <div className='item_btn'>
                <div className='btn-group'>
                  <div className='btn-group_inner'>
                    <div className="btn-inner">
                    <Link 
                        to="https://github.com/pearl1233333/simplediary.git" 
                        className='btn_github'>깃허브</Link>
                    </div>
                  </div>
                </div>
                <div className='btn-group'>
                  <div className='btn-group_inner'>
                    <div className="btn-inner">
                      <Link 
                        to="http://simplediary.vercel.app" 
                        target="_blank"
                        className='btn_source'>소스</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className='project_card'>
            <h2 className='project_card_title'>퍼블리싱 프로젝트</h2>
            <div className='project_card_list'>
              <div className='card_inner'>
                <div className='card_text'>
                <h3 className='card_title'>클리오</h3>
                <p className='card_desc'>모바일 페이지 퍼블리싱</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Project