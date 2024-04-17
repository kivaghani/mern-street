import React from 'react';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import IMG1 from '../../../images/atrangi.jpg';
import IMG2 from '../../../images/gopal.jpg';
import IMG3 from '../../../images/ghu.jpg';

const data = [
  {
    id: 2,
    image: IMG1,
    title: "Atarangi Chhole Kulche",
    review: 'https://www.google.com/search?q=atarangi+chole+kulcha+kiran+chowk&sca_esv=6946a8fe4d355c0f&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0_gczU_IlZ9CltT6zWDTAMRkSD9sA%3A1711788243032&ei=09AHZobMAYeM4-EPk9KZuAM&oq=atarangi+chole+kulcha+kiran+ch&gs_lp=Egxnd3Mtd2l6LXNlcnAiHmF0YXJhbmdpIGNob2xlIGt1bGNoYSBraXJhbiBjaCoCCAAyBxAhGAoYoAEyBxAhGAoYoAEyBxAhGAoYoAEyBxAhGAoYoAFI1S9QAFjII3AAeACQAQCYAZUCoAHNEqoBBDItMTC4AQPIAQD4AQGYAgqgAqMTwgIFECEYkgPCAgQQIRgVmAMAkgcEMi0xMKAHrEM&sclient=gws-wiz-serp',
    direction: "https://www.google.com/maps/dir//atarangi+chole+kulcha+kiran+chowk/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be04f98ef92b677:0x372f0fff056f9556?sa=X&ved=1t:3061&ictx=111",
  },
  {
    id: 2,
    image: IMG2,
    title: "Gopal Chinese 3",
    review: 'https://www.google.com/search?q=Gopal+Chinese+3+kiran+chowk&sca_esv=9b64196862666ea1&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn08w6kGMHmg_H7JnRsoNw7MDRVwQ3A%3A1711797375030&ei=f_QHZsu8AZGE4-EPh_uEgAc&ved=0ahUKEwiL-NyT7puFAxURwjgGHYc9AXAQ4dUDCBA&uact=5&oq=Gopal+Chinese+3+kiran+chowk&gs_lp=Egxnd3Mtd2l6LXNlcnAiG0dvcGFsIENoaW5lc2UgMyBraXJhbiBjaG93azIHECEYChigATIHECEYChigATIHECEYChigAUjeHVBSWO8bcAF4AJABAJgBmgKgAYUVqgEEMi0xMbgBA8gBAPgBAZgCC6ACyRXCAgQQIxgnwgIFECEYoAHCAgQQIRgVwgIFECEYnwWYAwCIBgGSBwQyLTExoAeELA&sclient=gws-wiz-serp',
    direction: "https://www.google.com/maps/dir//Jamnaba+farm+,Kiran+chowk,+Yogi+Chowk+Ground,+Nana+Varachha,+Surat,+Gujarat+395006/@21.2130167,72.7999692,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be04f7720fac47f:0x9273de54adf62eb5!2m2!1d72.8823709!2d21.2130367?entry=ttu",
  },
  {
    id: 2,
    image: IMG3,
    title: "Maa Bhagwati Ghughra",
    review: 'https://www.google.com/search?q=Maa+Bhagwati+Ghughra&rlz=1C1CHBF_enIN988IN988&oq=Maa+Bhagwati+Ghughra&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBBzI4N2owajmoAgCwAgE&sourceid=chrome&ie=UTF-8',
    direction: "https://www.google.com/maps?rlz=1C1CHBF_enIN988IN988&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBBzI4N2owajmoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KaeOwxwMT-A7MQTOcQTVjUsk&daddr=Nilkanth+Plaza,+Devi+Darshan,+Yogi+Chowk+Ground,+Chikuwadi,+Nana+Varachha,+Surat,+Gujarat+395006",
  },
  
];

function KiranChowk() {
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

export default KiranChowk;
