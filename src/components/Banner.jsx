import react from 'react'

function Banner() {

  const listHTML = "The spectacle<br />before us was<br />indeed <span className='title-name'>sublime</span>";
  const listItems = listHTML.split("<br />");

  return (
    <section className="main_banner">
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

export default Banner
