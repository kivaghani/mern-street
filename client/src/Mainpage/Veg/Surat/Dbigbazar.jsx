import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import IMG1 from '../../../images/sujal.png';
import IMG2 from '../../../images/krishnaa.png';


const data = [
  {
    id: 2,
    image: IMG1,
    title: "Sujal Paratha",
    review: 'https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LEs2SDdLK8wwYLRSNagwTko1MElJS05JsUwzNzOytDKoSEtLNElONbQ0TDQwSDFMM_ESLi7NSsxRKEgsSizJSFQoLgXSAE7OF4g&q=sujal+paratha+surat&rlz=1C1CHBF_enIN988IN988&oq=sujal+paratha&gs_lcrp=EgZjaHJvbWUqEggAEC4YFBivARjHARiHAhiABDISCAAQLhgUGK8BGMcBGIcCGIAEMgkIARBFGDkYgAQyBwgCEAAYgAQyBwgDEAAYgAQyCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMg0ICBAAGIYDGIAEGIoFMg0ICRAAGIYDGIAEGIoFqAIAsAIB&sourceid=chrome&ie=UTF-8',
    direction: "https://www.google.com/maps/dir/23.0395302,72.6742452/sujal+paratha+surat/@22.0930353,71.6077707,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be04dfcdd9f7629:0xffa4ce191a00d1f4!2m2!1d72.771567!2d21.1594344?entry=ttu",
  },
  {
    id: 2,
    image: IMG2,
    title: "Krishna Paratha",
    review: 'https://www.google.com/search?q=krishna1+paratha+surat&sca_esv=aa05bab2491abcc9&rlz=1C1CHBF_enIN988IN988&biw=1536&bih=695&tbm=lcl&sxsrf=ACQVn0_2CN4n5UtD6DrgwW6tbScusnJNqQ%3A1711431228074&ei=PF4CZs6JBMib4-EP0oakiAQ&ved=0ahUKEwjOl6CTmpGFAxXIzTgGHVIDCUEQ4dUDCAk&uact=5&oq=krishna1+paratha+surat&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIhZrcmlzaG5hMSBwYXJhdGhhIHN1cmF0MgcQABiABBgNMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgMyCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgNIkQlQhARYhARwAHgAkAEAmAHFAaAB9QKqAQMwLjK4AQPIAQD4AQGYAgKgAoMDwgIFEAAYgATCAgYQABgHGB6YAwCIBgGSBwUwLjEuMaAH7Qo&sclient=gws-wiz-local#rlfi=hd:;si:;mv:[[21.158032199999997,72.7852934],[21.149366,72.7708634]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:9',
    direction: "https://www.google.com/maps/dir//5Q5C%2B2MC,+TIRANGA+points,+y+JUNCTION,+Udhana+-+Magdalla+Rd,+Surat/@21.157548,72.6892347,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be04d91c43f1f59:0x7473ff0c3638e8d!2m2!1d72.7716364!2d21.1575679?entry=ttu",
  },
];

function Dbigbazar() {
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

export default Dbigbazar;
