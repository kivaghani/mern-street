import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import IMG1 from '../../../images/franki.jpg';
import IMG2 from '../../../images/burger-17.jpg';
import IMG3 from '../../../images/tikka.jpeg';
import IMG4 from '../../../images/waffel.jpeg';

const data = [
  {
    id: 2,
    image: IMG1,
    title: "Ishwar Frankie",
    review: 'https://www.google.com/maps/place/Ishwar+Frankie/@23.0468162,72.6810059,95m/data=!3m1!1e3!4m14!1m7!3m6!1s0x395e8714013578a5:0x5e35fb32d2663e44!2sSuperia+-+II+Restaurant+%26+Banquet!8m2!3d23.046545!4d72.6806026!16s%2Fg%2F11f3cmd44r!3m5!1s0x395e874e59208b23:0x8bd267aae873428e!8m2!3d23.0468162!4d72.6810059!16s%2Fg%2F11rwp6zpqf!5m1!1e4?entry=ttu',
    direction: "https://www.google.com/maps/dir//2MWJ%2BPCC+Ishwar+Frankie,+Service+Rd,+Nikol+Gam+Rd,+New+India+Colony,+Nikol,+Ahmedabad,+Gujarat+382345/@23.0468162,72.6810059,95m/data=!3m1!1e3!4m17!1m7!3m6!1s0x395e874e59208b23:0x8bd267aae873428e!2sIshwar+Frankie!8m2!3d23.0468162!4d72.6810059!16s%2Fg%2F11rwp6zpqf!4m8!1m0!1m5!1m1!1s0x395e874e59208b23:0x8bd267aae873428e!2m2!1d72.6810059!2d23.0468162!3e9!5m1!1e4?entry=ttu",
  },
  {
    id: 2,
    image: IMG2,
    title: "Burger wale",
    review: 'https://www.google.com/maps/place/Burger+wale/@23.0469409,72.6810631,67m/data=!3m1!1e3!4m6!3m5!1s0x395e8745607e7dab:0x19b859cbed2b447e!8m2!3d23.0468995!4d72.6810343!16s%2Fg%2F11rtdd15hh!5m1!1e4?entry=ttu',
    direction: "https://www.google.com/maps/dir//Burger+wale,+Nr.+Superiya+2,+Sardar+Patel+Ring+Rd,+Nikol,+Ahmedabad,+Gujarat+382350/@23.0469409,72.6810631,67m/data=!3m1!1e3!4m17!1m7!3m6!1s0x395e8745607e7dab:0x19b859cbed2b447e!2sBurger+wale!8m2!3d23.0468995!4d72.6810343!16s%2Fg%2F11rtdd15hh!4m8!1m0!1m5!1m1!1s0x395e8745607e7dab:0x19b859cbed2b447e!2m2!1d72.6810343!2d23.0468995!3e9!5m1!1e4?entry=ttu",
  },
  {
    id: 2,
    image: IMG3,
    title: "HR Brother'S TikkaPav",
    review: 'https://www.google.com/search?q=HR+Brother%27S+TikkaPav&rlz=1C1CHBF_enIN988IN988&oq=HR+Brother%27S+TikkaPav&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBBzE5M2owajmoAgCwAgE&sourceid=chrome&ie=UTF-8',
    direction: "https://www.google.com/maps/dir//HR+Brother'S+Tikka+Pav/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x395e8795bd02d8eb:0x3a89f18286a859e2?sa=X&ved=1t:3061&ictx=111",
  },
  {
    id: 2,
    image: IMG4,
    title: "The waffle House",
    review: 'https://www.google.com/search?q=The+waffle+House%5C&rlz=1C1CHBF_enIN988IN988&oq=The+waffle+House%5C&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAtIBBzI1OGowajSoAgCwAgE&sourceid=chrome&ie=UTF-8',
    direction: "https://www.google.com/maps/dir//The+waffle+House%5C/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x395e874e59cfcdf9:0xd50a3b22344bd22c?sa=X&ved=1t:3061&ictx=111",
  }
];

function AlakhNoOtlo() {
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

export default AlakhNoOtlo;
