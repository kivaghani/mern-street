import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import IMG1 from '../../../images/shree.jpg';
import IMG2 from '../../../images/vadi.jpg';
import IMG3 from '../../../images/hun.jpg';

const data = [
  {
    id: 2,
    image: IMG1,
    title: "Shree Sai Punjabi Khana & Chinese",
    review: 'https://www.google.com/search?q=Shree+Sai+Punjabi+Khana+%26+Chinese&rlz=1C1CHBF_enIN988IN988&oq=Shree+Sai+Punjabi+Khana+%26+Chinese&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg9MgYIAhBFGDwyBggDEEUYPNIBBzE5M2owajSoAgCwAgE&sourceid=chrome&ie=UTF-8',
    direction: "https://www.google.com/maps/dir//Shree+Sai+Punjabi+Khana+%26+Chinese/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x395fcf38588509ff:0x49baea674ab0161c?sa=X&ved=1t:3061&ictx=111",
  },
  {
    id: 2,
    image: IMG2,
    title: "Marwadi Food Corner",
    review: 'https://www.google.com/search?q=marwadi+food++vadodara&sca_esv=9a2042a3064e843f&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn08DRYQ3DIDEVZGBwJvsg78URGdOFA%3A1712986878693&ei=_hoaZvruKZGmseMPoriHmAw&ved=0ahUKEwj65aKzvb6FAxURU2wGHSLcAcMQ4dUDCBA&uact=5&oq=marwadi+food++vadodara&gs_lp=Egxnd3Mtd2l6LXNlcnAiFm1hcndhZGkgZm9vZCAgdmFkb2RhcmEyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yCBAAGBYYHhgPSPESUNMCWOUOcAJ4AJABAJgB1QGgAaYNqgEFMC43LjK4AQPIAQD4AQGYAgugAs4NwgINEAAYgAQYigUYQxiwA8ICCBAAGIAEGLADwgINEAAYgAQYFBiHAhiwA8ICGRAuGIAEGIoFGEMYxwEYrwEYyAMYsAPYAQHCAhQQLhivARjHARiABBjIAxiwA9gBAcICFBAuGIAEGMcBGK8BGMgDGLAD2AEBwgINEAAYgAQYigUYQxjJA8ICDhAuGK8BGMcBGJIDGIAEwgIFEAAYgATCAgoQABiABBgUGIcCwgILEC4YgAQYxwEYrwHCAgsQLhivARjHARiABMICCxAAGIAEGIoFGIYDmAMAiAYBkAYUugYGCAEQARgIkgcFMi43LjKgB4w1&sclient=gws-wiz-serp&lqi=ChZtYXJ3YWRpIGZvb2QgIHZhZG9kYXJhSPKI4sqKq4CACFopEAAQARgAGAEYAiIVbWFyd2FkaSBmb29kIHZhZG9kYXJhKgYIAhAAEAGSARVyYWphc3RoYW5pX3Jlc3RhdXJhbnSaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTlhhbk16TkRsUlJSQUKqAT4QATIfEAEiG8LM_NmMcFzB5p29ESOLwOtOEEr6O0oYyy51ujIZEAIiFW1hcndhZGkgZm9vZCB2YWRvZGFyYQ#rlimm=2455197639201495344',
    direction: "https://www.google.com/maps?s=web&rlz=1C1CHBF_enIN988IN988&sca_esv=9a2042a3064e843f&lqi=ChZtYXJ3YWRpIGZvb2QgIHZhZG9kYXJhSPKI4sqKq4CACFopEAAQARgAGAEYAiIVbWFyd2FkaSBmb29kIHZhZG9kYXJhKgYIAhAAEAGSARVyYWphc3RoYW5pX3Jlc3RhdXJhbnSaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTlhhbk16TkRsUlJSQUKqAT4QATIfEAEiG8LM_NmMcFzB5p29ESOLwOtOEEr6O0oYyy51ujIZEAIiFW1hcndhZGkgZm9vZCB2YWRvZGFyYQ&phdesc=Flq9975zrMc&vet=12ahUKEwiGysa4vb6FAxUQTWwGHWNiBUUQ1YkKegQIGBAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KQnZEFc4z185MTCZ-6E-nRIi&daddr=Shop+No.+21+%26+22+Ratri-bazaar,+Mangal+Pandey+Rd,+Karelibaugh,+Karelibagh,+Vadodara,+Gujarat+390002",
  },
  {
    id: 2,
    image: IMG3,
    title: "Hungry birds",
    review: 'https://www.google.com/search?q=Hungry+birds+vadodara+ratri+bazar&sca_esv=9a2042a3064e843f&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn080DquQ1X-e5GpC_bUkJclLUAJywQ%3A1712987022890&ei=jhsaZtDzNYGsseMPqI2YyA4&ved=0ahUKEwjQ8oP4vb6FAxUBVmwGHagGBukQ4dUDCBA&uact=5&oq=Hungry+birds+vadodara+ratri+bazar&gs_lp=Egxnd3Mtd2l6LXNlcnAiIUh1bmdyeSBiaXJkcyB2YWRvZGFyYSByYXRyaSBiYXphcjILEC4YgAQYxwEYrwEyGhAuGIAEGMcBGK8BGJcFGNwEGN4EGOAE2AECSIkrUI8BWOIlcAJ4AZABAJgBqAKgAbAZqgEGMC4xNi4xuAEDyAEA-AEBmAIRoAL0FsICChAAGEcY1gQYsAPCAg0QABiABBiKBRhDGLADwgIZEC4YgAQYigUYQxjHARivARjIAxiwA9gBAcICBRAAGIAEwgIGEAAYFhgewgIIEAAYFhgeGA_CAgsQABiABBiKBRiGA8ICCxAAGIAEGIoFGJECmAMA4gMFEgExIECIBgGQBgm6BgQIARgIugYGCAIQARgUkgcIMi4xMy4xLjGgB4B_&sclient=gws-wiz-serp',
    direction: "https://www.google.com/maps?sca_esv=9a2042a3064e843f&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn080DquQ1X-e5GpC_bUkJclLUAJywQ:1712987022890&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiIUh1bmdyeSBiaXJkcyB2YWRvZGFyYSByYXRyaSBiYXphcjILEC4YgAQYxwEYrwEyGhAuGIAEGMcBGK8BGJcFGNwEGN4EGOAE2AECSIkrUI8BWOIlcAJ4AZABAJgBqAKgAbAZqgEGMC4xNi4xuAEDyAEA-AEBmAIRoAL0FsICChAAGEcY1gQYsAPCAg0QABiABBiKBRhDGLADwgIZEC4YgAQYigUYQxjHARivARjIAxiwA9gBAcICBRAAGIAEwgIGEAAYFhgewgIIEAAYFhgeGA_CAgsQABiABBiKBRiGA8ICCxAAGIAEGIoFGJECmAMA4gMFEgExIECIBgGQBgm6BgQIARgIugYGCAIQARgUkgcIMi4xMy4xLjGgB4B_&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KZthV1g4z185MSXJnXQIe3gR&daddr=Shop+no+9,+Retri+bazar,+Opp+vuda+circle,+Kareli+baug,+Vadodara,+Gujarat+390018",
  },
  
];

function Ratri() {
  return (
    <>
      <Header />
      
      <section id='portfolio'>
        <h2 className='text-white'>Select The Food</h2>
        <div className="container portfolio__container">
          {data.map(({ id, image, title, review, direction }) => {
            return (
              <article key={id} className='portfolio-item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={review} className='cr'>Check Review</a>
                  <a href={direction} className='dr'>Get Direction</a>
                </div>
                <div className="bo">
                  <a href={`/book/${id}`} className='book'>Book Order</a>
                </div>
              </article>
            )
          })}
        </div>
       
      </section>
      <Footer/>
  
    </>
  )
}

export default Ratri;
