import React, { useState } from 'react'

function Project() {

  
  return (
    <section className="project">
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
              <h3>namenamenamename</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, 
                beatae autem sapiente illum alias quisquam veritatis placeat, cum, eius et vero 
                nesciunt tenetur delectus soluta voluptate consectetur voluptas! Mollitia, itaque.</p>
              <div className='btn-group'>
                <a href="#" className='btn_source'>소스</a>
                <a href="#" className='btn_link'>깃허브</a>
              </div>
            </div>
            
          </article>


        </div>
      </div>
    </section>
  )
}

export default Project