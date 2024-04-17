import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import IMG1 from '../../../images/pakcan.jpg';
import IMG2 from '../../../images/sans.jpg';
// import IMG3 from '../../../images/pav-Bhaji.jpg';
// import IMG4 from '../../../images/fc.jpg';

const data = [
  {
    id: 2,
    image: IMG1,
    title: "Ashish Bhai Dal Pakwan",
    review: 'https://www.google.com/search?q=Ashish+Bhai+%22Dal+Pakwan%22&rlz=1C1CHBF_enIN988IN988&oq=Ashish+Bhai+%22Dal+Pakwan%22&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzIwN2owajSoAgCwAgE&sourceid=chrome&ie=UTF-8',
    direction: "https://www.google.com/maps/dir//Ashish+Bhai+%22Dal+Pakwan%22/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3959cbca1a09fe4d:0x48e95f6c47e318e5?sa=X&ved=1t:3061&ictx=111",
  },
  {
    id: 2,
    image: IMG2,
    title: "GJ - 5 Sandwich & Pizza",
    review: 'https://www.google.com/search?q=gj+-+5+sandwich+%26+pizza+rajkot+kalavad+road&sca_esv=8e47e8b36fbcdee8&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn089TuzRWqbMIUwYcmlIcvBTR1p_uA%3A1712897937373&ei=kb8YZsCTFqGhseMP9LmK4A0&oq=GJ+-+5+Sandwich+%26+Pizza+rajkot+kalavad&gs_lp=Egxnd3Mtd2l6LXNlcnAiJkdKIC0gNSBTYW5kd2ljaCAmIFBpenphIHJhamtvdCBrYWxhdmFkKgIIADIFECEYoAEyBRAhGKABSLkVUABY4QtwAHgBkAEAmAHzAaAB1g6qAQUwLjMuNrgBA8gBAPgBAZgCCaAC-w7CAgQQIRgVwgIFECEYnwXCAgcQIRgKGKABmAMAkgcFMC4yLjegB_Um&sclient=gws-wiz-serp',
    direction: "https://www.google.com/maps/dir//gj+-+5+sandwich+%26+pizza+rajkot+kalavad+road/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3959cb242c984b95:0xd517cf13bcd2eec3?sa=X&ved=1t:3061&ictx=111",
  },
//   {
//     id: 3,
//     image: IMG3,
//     title: "Bombay Gulalwadi",
//     review: 'https://www.google.com/search?q=Bombay+Gulalwadi+Bhajipav+...',
//     direction: "https://www.google.com/maps/dir//2HFQ%2BG73,+Old+City...",
//   },
//   {
//     id: 4,
//     image: IMG4,
//     title: "Manek foodcourt",
//     review: 'https://www.google.com/search?q=Manek+chowk+food+court...',
//     direction: "https://www.google.com/maps/dir//4G3M%2BWGG,+Sarkhej...",
//   }
];

function Kalavad() {
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

export default Kalavad;
