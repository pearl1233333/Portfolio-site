import react from 'react'

function Home() {

  const listHTML = "사용자에 의한<br />사용자를 위한<br />개발자 <span className='title-name'>최진주입니다.</span>";
  const listItems = listHTML.split("<br />");

  return (
    <section id="home">
      <div className="main_title">
        <div className="main_title_inner">
          {listItems.map((line, i) => (
            <div key={i} className="title-mask">
              <span className="title-line" dangerouslySetInnerHTML={{ __html: line }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
