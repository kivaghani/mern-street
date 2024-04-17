import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import IMG1 from '../../../images/bhanubha.jpg';
import IMG2 from '../../../images/alu.jpeg';
import IMG3 from '../../../images/chaka.jpg';
import IMG4 from '../../../images/nav.jpg';

const data = [
  {
    id: 2,
    image: IMG1,
    title: "Bhanu Na Khaman",
    review: 'https://www.google.com/search?q=Bhanu+Na+Khaman+Hirabaug+%7C+Varachha&rlz=1C1CHBF_enIN988IN988&oq=Bhanu+Na+Khaman+Hirabaug+%7C+Varachha&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBBzkwOWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8',
    direction: "https://www.google.com/maps/dir//3,+Bhanu+Na+Khaman+Hirabaug+%7C+Varachha,+Oppo,+Zadafiya+Complex,+BRTS+Stand,+Near+Martinoz+Pizza,+to,+PP+Savani+Road,+Hirabaugh,+Surat,+Gujarat+395006/@21.215861,72.8595981,18z/data=!4m18!1m8!3m7!1s0x3be04faa5a5e0c11:0x7e46f23c5ec86dcf!2sBhanu+Na+Khaman+Hirabaug+%7C+Varachha!8m2!3d21.215861!4d72.8619799!15sCipzdHJlZXQgZm9vZCBuZWFyIEhpcmFiYXVnaCwgU3VyYXQsIEd1amFyYXRaKiIoc3RyZWV0IGZvb2QgbmVhciBoaXJhYmF1Z2ggc3VyYXQgZ3VqYXJhdJIBFGZhc3RfZm9vZF9yZXN0YXVyYW504AEA!16s%2Fg%2F11rqswl3ft!4m8!1m0!1m5!1m1!1s0x3be04faa5a5e0c11:0x7e46f23c5ec86dcf!2m2!1d72.8619799!2d21.215861!3e9?entry=ttu",
  },
  {
    id: 2,
    image: IMG2,
    title: "Sainath alupuri",
    review: 'https://www.google.com/search?q=Sainath+alupuri+hirabaug&rlz=1C1CHBF_enIN988IN988&oq=Sainath+alupuri+hirabaug&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBBzMzOWowajmoAgCwAgE&sourceid=chrome&ie=UTF-8',
    direction: "https://www.google.com/maps/dir//Sainath+alupuri+hirabaug/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be04f00470c60f3:0xcf150ff7f6aad1e6?sa=X&ved=1t:3061&ictx=111",
  },
  {
    id: 2,
    image: IMG3,
    title: "Chakabhai Bhelwala",
    review: 'https://www.google.com/search?q=Chakabhai+Bhelwala&rlz=1C1CHBF_enIN988IN988&oq=Chakabhai+Bhelwala&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIKCAIQABiABBiiBDIKCAMQABiABBiiBDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPNIBCDE1MjVqMGo5qAIAsAIB&sourceid=chrome&ie=UTF-8',
    direction: "https://www.google.com/maps?rlz=1C1CHBF_enIN988IN988&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIKCAIQABiABBiiBDIKCAMQABiABBiiBDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPNIBCDE1MjVqMGo5qAIAsAIB&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KSO3lswaT-A7MYmV2eBH4gJx&daddr=Shop+No+G1,+Sargam+Complex,+Varachha+Main+Rd,+Beside+Doctor+House,+Tapsil+Society,+Hirabaugh,+Surat,+Gujarat+395006",
  },
  {
    id: 2,
    image: IMG4,
    title: "Navarang Khaman",
    review: 'https://www.google.com/search?q=navarang+khaman&rlz=1C1CHBF_enIN988IN988&oq=Navarang+Khaman&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBwgCEAAYgAQyCAgDEAAYFhgeMggIBBAAGBYYHjIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBBzIzNmowajSoAgCwAgE&sourceid=chrome&ie=UTF-8',
    direction: "https://www.google.com/maps/dir//navarang+khaman/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be04f1ac9f38b77:0xb9a78f176401cdf0?sa=X&ved=1t:3061&ictx=111",
  }
];

function Hirabag() {
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

export default Hirabag;
