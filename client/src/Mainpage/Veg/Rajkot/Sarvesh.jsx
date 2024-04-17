import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import IMG1 from '../../../images/bhel.jpg';
import IMG2 from '../../../images/dhaa.jpg';
import IMG3 from '../../../images/bhelvala.jpg'
import IMG4 from '../../../images/pkodi.jpg';

const data = [
  {
    id: 2,
    image: IMG1,
    title: "Santosh Bhel",
    review: 'https://www.google.com/search?q=santosh+bhel+rajkot+sarveshwar+chowk&sca_esv=8e47e8b36fbcdee8&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0_Klu3CTJ6_6ZmeatbXBFto7y_jog%3A1712896776766&ei=CLsYZsqvLoinseMP4J6JqA0&oq=santosh+bhel+rajkot+sarveshwar+cho&gs_lp=Egxnd3Mtd2l6LXNlcnAiInNhbnRvc2ggYmhlbCByYWprb3Qgc2FydmVzaHdhciBjaG8qAggAMgcQIRgKGKABMgcQIRgKGKABSPk4UABY4CpwAHgAkAEAmAGIAqABgw-qAQUwLjMuNrgBA8gBAPgBAZgCBaAClgjCAgUQIRigAcICBBAhGBWYAwCSBwUwLjMuMqAHmSw&sclient=gws-wiz-serp',
    direction: "https://www.google.com/maps?sca_esv=8e47e8b36fbcdee8&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0_Klu3CTJ6_6ZmeatbXBFto7y_jog:1712896776766&gs_lp=Egxnd3Mtd2l6LXNlcnAiInNhbnRvc2ggYmhlbCByYWprb3Qgc2FydmVzaHdhciBjaG8qAggAMgcQIRgKGKABMgcQIRgKGKABSPk4UABY4CpwAHgAkAEAmAGIAqABgw-qAQUwLjMuNrgBA8gBAPgBAZgCBaAClgjCAgUQIRigAcICBBAhGBWYAwCSBwUwLjMuMqAHmSw&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KVGOMf8Yylk5MbuN-OJnEhoe&daddr=7QVR%2B88G,+Dr+Yagnik+Rd,+Sarveshwar+Chowk,+Jagnath+Plot,+Rajkot,+Gujarat+360001",
  },
  {
    id: 2,
    image: IMG2,
    title: "Bali's Punjabi Dhaba",
    review: 'https://www.google.com/search?q=Bali%27s+Punjabi+Dhaba+(Sarweshvar+Chowk+Wala)&rlz=1C1CHBF_enIN988IN988&oq=Bali%27s+Punjabi+Dhaba+(Sarweshvar+Chowk+Wala)&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABgKGBYYHjINCAIQABiGAxiABBiKBTINCAMQABiGAxiABBiKBTINCAQQABiGAxiABBiKBTIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBBzU0OGowajmoAgCwAgE&sourceid=chrome&ie=UTF-8',
    direction: "https://www.google.com/maps/dir//Bali's+Punjabi+Dhaba+(Sarveshwar+Chowk+Wala)/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3959cb5e9e9ba8ab:0x4cf5af55230d29db?sa=X&ved=1t:3061&ictx=111",
  },
  {
    id: 2,
    image: IMG3,
    title: "Bombay Style Bhelvala",
    review: 'https://www.google.com/search?q=Bombay+Style+Bhelvala+rajkot+sarveshwar+circle&sca_esv=8e47e8b36fbcdee8&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0_xvoaakXrQdyj_BYFcxZ3N47-18A%3A1712897012307&ei=9LsYZpm1EuviseMPkfGyQA&ved=0ahUKEwiZ_9HP7ruFAxVrcWwGHZG4DAgQ4dUDCBA&uact=5&oq=Bombay+Style+Bhelvala+rajkot+sarveshwar+circle&gs_lp=Egxnd3Mtd2l6LXNlcnAiLkJvbWJheSBTdHlsZSBCaGVsdmFsYSByYWprb3Qgc2FydmVzaHdhciBjaXJjbGUyCRAhGAoYoAEYCjIJECEYChigARgKMgkQIRgKGKABGApIikFQAFjaP3AAeACQAQCYAfUBoAHzHKoBBjAuOC4xMLgBA8gBAPgBAZgCEqACxR3CAgcQIRgKGKABwgIEECEYFcICBhAhGAoYCpgDAOIDBRIBMSBAkgcGMC41LjEzoAeiVw&sclient=gws-wiz-serp&lqi=Ci5Cb21iYXkgU3R5bGUgQmhlbHdhbGEgcmFqa290IHNhcnZlc2h3YXIgY2lyY2xlSMOSgv2Hq4CACFpAEAAQARACEAQQBRgAGAEYAyIuYm9tYmF5IHN0eWxlIGJoZWx3YWxhIHJhamtvdCBzYXJ2ZXNod2FyIGNpcmNsZZIBFGZhc3RfZm9vZF9yZXN0YXVyYW50qgGLARABKjIiLmJvbWJheSBzdHlsZSBiaGVsd2FsYSByYWprb3Qgc2FydmVzaHdhciBjaXJjbGUoADIfEAEiG4quQuYfDUDbwzYmvc3sOvZTBnVwrRUBnZ2mRDIyEAIiLmJvbWJheSBzdHlsZSBiaGVsd2FsYSByYWprb3Qgc2FydmVzaHdhciBjaXJjbGU#rlimm=5557079828810523051',
    direction: "https://www.google.com/maps?s=web&rlz=1C1CHBF_enIN988IN988&sca_esv=8e47e8b36fbcdee8&lqi=Ci5Cb21iYXkgU3R5bGUgQmhlbHdhbGEgcmFqa290IHNhcnZlc2h3YXIgY2lyY2xlSMOSgv2Hq4CACFpAEAAQARACEAQQBRgAGAEYAyIuYm9tYmF5IHN0eWxlIGJoZWx3YWxhIHJhamtvdCBzYXJ2ZXNod2FyIGNpcmNsZZIBFGZhc3RfZm9vZF9yZXN0YXVyYW50qgGLARABKjIiLmJvbWJheSBzdHlsZSBiaGVsd2FsYSByYWprb3Qgc2FydmVzaHdhciBjaXJjbGUoADIfEAEiG4quQuYfDUDbwzYmvc3sOvZTBnVwrRUBnZ2mRDIyEAIiLmJvbWJheSBzdHlsZSBiaGVsd2FsYSByYWprb3Qgc2FydmVzaHdhciBjaXJjbGU&phdesc=FKrunZFdEn8&vet=12ahUKEwjBi-vX7ruFAxW3amwGHTh9BmsQ1YkKegQIGhAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KWvYtPgYylk5MathvWCpth5N&daddr=221,+Dr+Yagnik+Rd,+Jagnath+Plot,+Rajkot,+Gujarat+360001",
  },
  {
    id: 2,
    image: IMG4,
    title: "krishna marwadi pani puri",
    review: 'https://www.google.com/search?q=krishna+marwadi+pani+puri+rajkot+&sca_esv=8e47e8b36fbcdee8&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn09XNP6jpkJdSLZm4Dxr8i0PsXUoEA%3A1712897263900&ei=77wYZrDINtHiseMP3fCo2Ao&ved=0ahUKEwjw-83H77uFAxVRcWwGHV04CqsQ4dUDCBA&uact=5&oq=krishna+marwadi+pani+puri+rajkot+&gs_lp=Egxnd3Mtd2l6LXNlcnAiIWtyaXNobmEgbWFyd2FkaSBwYW5pIHB1cmkgcmFqa290IDIFECEYoAEyBRAhGKABMgUQIRigAUjmHFCsAljaGXABeACQAQCYAf4BoAGWD6oBBTAuMi43uAEDyAEA-AEBmAIJoAK7D8ICBRAhGJ8FwgIHECEYChigAZgDAIgGAZIHBTAuMi43oAftJw&sclient=gws-wiz-serp',
    direction: "https://www.google.com/maps?sca_esv=8e47e8b36fbcdee8&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn09XNP6jpkJdSLZm4Dxr8i0PsXUoEA:1712897263900&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiIWtyaXNobmEgbWFyd2FkaSBwYW5pIHB1cmkgcmFqa290IDIFECEYoAEyBRAhGKABMgUQIRigAUjmHFCsAljaGXABeACQAQCYAf4BoAGWD6oBBTAuMi43uAEDyAEA-AEBmAIJoAK7D8ICBRAhGJ8FwgIHECEYChigAZgDAIgGAZIHBTAuMi43oAftJw&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KWkhE861y1k5MWwbDzBKQRYD&daddr=Dr+Yagnik+Rd,+opposite+jagnath+mahadev+mandir,+Sarveshwar+Chowk,+Jagnath+Plot,+Rajkot,+Gujarat+360001",
  }
];

function Sarvesh() {
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

export default Sarvesh;
