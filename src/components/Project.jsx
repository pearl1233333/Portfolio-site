import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Project() {

  
  return (
    <section id="project">
      <div className="wrapper">
        <div className="project_head">
          <h3 data-aos="fade-up-right">PROJECT</h3>
        </div>
        <div className="project_body">
          <article
            data-aos="fade-up"
            className='item'
          >
            <div className="item_img">
              <div className="bg_item"></div>
            </div>
            <div className='item_info'>
              <h3>프로젝트명</h3>
              <div className='item_description'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, 
                  beatae autem 대충 프로젝트 설명 어쩌구</p>
                <p>주요기능 : </p>
                <p>사용기술 : </p>              
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


        </div>
      </div>
    </section>
  )
}

export default Project