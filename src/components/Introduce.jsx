import { useEffect } from 'react'

function Introduce() {


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
            data-aos="fade-up-right"
            data-aos-anchor-placement="top-bottom"
          >
            <div 
              className="chart chart1"
              data-percent="55"
              data-bar-color="#2079ff"
            ><span className="title">chart1</span></div>
            <div
              className="chart chart2"
              data-percent="35"
              data-bar-color="#97ff20"
            ><span className="title">chart2</span></div>
            <div
              className="chart chart3"
              data-percent="85"
              data-bar-color="#ff9e20"  
            ><span className="title">chart3</span></div>
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