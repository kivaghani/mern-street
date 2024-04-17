import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import IMG1 from '../../../images/BalaDOsa.jpg';
import IMG2 from '../../../images/manek_pizza.jpg';
import IMG3 from '../../../images/pav-Bhaji.jpg';
import IMG4 from '../../../images/fc.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Balan-dosa",
    review: 'https://www.google.com/search?q=balan+dosa+manek+chowk...',
    direction: "https://www.google.com/maps/dir//Tilak+maidan,+Manek+Chowk...",
  },
  {
    id: 2,
    image: IMG2,
    title: "Manek_Pizza ",
    review: 'https://www.google.com/search?q=manek+pizza+sandwich&...',
    direction: "https://www.google.com/maps?rlz=1C1CHBF_enIN988IN988...",
  },
  {
    id: 2,
    image: IMG3,
    title: "Bombay Gulalwadi",
    review: 'https://www.google.com/search?q=Bombay+Gulalwadi+Bhajipav+...',
    direction: "https://www.google.com/maps/dir//2HFQ%2BG73,+Old+City...",
  },
  {
    id: 2,
    image: IMG4,
    title: "Manek foodcourt",
    review: 'https://www.google.com/search?q=Manek+chowk+food+court...',
    direction: "https://www.google.com/maps/dir//4G3M%2BWGG,+Sarkhej...",
  }
];

function ManekChowk() {
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

export default ManekChowk;
