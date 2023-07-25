import React from 'react'

function Project() {
  return (
    <section className="project">
      <div className="wrapper">
        <div className="project_head" data-aos="fade-up-right">
          <h3>PROJECT</h3>
          <p
            className="description"
            data-aos="fade-up-right"
          >
            description
          </p>
        </div>
        <div className="project_body">
          <article className="item"
            data-aos="fade-up"
          >
            {/* <a href="#" className="bg_item">
              <img src="https://image.mediapen.com/news/202103/news_605667_1614652226_m.jpg" alt="이미지">
            </a> */}
            <div className="modal">
              <div className="dim"></div>
              <div className="modal_head">
                <h2>프로젝트 명</h2>
                <button className="btn_close">닫기</button>
              </div>
              <div className="modal_body">
                <img src="https://image.mediapen.com/news/202103/news_605667_1614652226_m.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi, quas, corrupti dolor enim fugit maiores aperiam rerum ad voluptas, praesentium laborum veniam incidunt! Qui vero minima dolores esse facere.</p>
                <div className="modal_desc">
                  <a href="#">소스</a>
                  <a href="#">VIEW</a>
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