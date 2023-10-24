import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    const titleInput = form.current.querySelector('input[name="form_title"]');
    const emailInput = form.current.querySelector('input[name="user_email"]');
    const messageInput = form.current.querySelector('textarea[name="message"]');
    
    if (!titleInput.value) {
      alert("제목을 입력해주세요.");
      return;
    }

    if (!emailInput.value) {
      alert("이메일을 입력해주세요.");
      return;
    }

    if (!messageInput.value) {
      alert("메시지를 입력해주세요.");
      return;
    }

    const confirmed = window.confirm("전송하시겠습니까?");

    if (confirmed) {
      emailjs.sendForm("service_7x81iqj", "template_2ai8tdj", form.current, "FwW6SBriB5rLbDKc2").then(
        result => {
          alert("성공적으로 전송되었습니다.");
          form.current.reset();
        },
        error => {
          console.log(error.text);
          alert("전송이 실패되었습니다.");
        },
      );
    }
  };

  return (
    <section id="contact">
      <div className="wrapper">
      <div className="contact_head">
        <h3 data-aos="fade-up-right">CONTACT</h3>
      </div>
      <div className="contact_body" data-aos="fade-up-right">
        <form 
          id="contact-form"
          ref={form} 
          onSubmit={sendEmail}>
          <div className="form_row">
            <input type="hidden" name="contact_number" />
            <label 
              htmlFor="" 
              className="form_lbl"
              name="form_title"
            >제목</label>
            <input 
              type="text"
              className="form_input"
              name="form_title"
              placeholder="제목을 입력해주세요."  
            />
          </div>
          <div className="form_row">
            <label 
              htmlFor="" 
              className="form_lbl"
              name="user_email"
            >이메일</label>
            <input 
              type="email" 
              className="form_input"
              name="user_email"
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
              className="form_message"
              placeholder="내용을 입력해주세요."
            ></textarea>
          </div>
          <div className="form_btn">
            <button
              type="submit" 
              value="Send"
              className="btn_submit"
            >
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">보내기</span>
          </button>
          </div>
        </form>
      </div>
      </div>
    </section>
  )
  
}

export default Contact