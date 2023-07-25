import React from 'react'

function Banner() {
  return (
    <section className="main_banner">
      <div className="main_title">
        <div className="main_title_inner" data-linecount="3">
          The spectacle<br /> 
          before us was<br /> 
          indeed <span className="title-name">sublime</span>
        </div>
      </div>
      <div className="scroll-text first" data-speed="1.3">
        <p data-speed="auto">text1</p>
      </div>
      <div className="scroll-text second" data-speed="1.5">
        <p data-speed="auto">text2</p>
      </div>
    </section>
  )
}

export default Banner