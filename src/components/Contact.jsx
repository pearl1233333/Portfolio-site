import React from "react"

function Contact() {
  return (
    <section id="contact">
      <div className="wrapper">
      <div className="contact_head">
        <h3 data-aos="fade-up-right">CONTACT</h3>
      </div>
      <div className="contact_body" data-aos="fade-up-right">
        <form action="">
          <div className="form_row">
            <label 
              htmlFor="" 
              className="form_lbl"
              name="title"
            >제목</label>
            <input 
              type="text" 
              className="form_input"
              name="title" 
              placeholder="제목을 입력해주세요."  
            />
          </div>
          <div className="form_row">
            <label 
              htmlFor="" 
              className="form_lbl"
              name="email"
            >이메일</label>
            <input 
              type="text" 
              className="form_input"
              name="email" 
              placeholder="이메일을 입력해주세요."  
            />
          </div>
          <div className="form_row">
            <label 
              htmlFor="" 
              className="form_lbl"
              name="message"
            >내용</label>
            <textarea 
              name="message" 
              id="" 
              cols="30" 
              rows="10" 
              class="form_message"
              placeholder="내용을 입력해주세요."
            ></textarea>
          </div>
          <div className="form_btn">
            <button
              type="submit"
              className="btn_submit"
            >
            <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
            </span>
            <span class="button-text">보내기</span>
          </button>
          </div>
        </form>
      </div>
      </div>
    </section>
  )
  
}

export default Contact