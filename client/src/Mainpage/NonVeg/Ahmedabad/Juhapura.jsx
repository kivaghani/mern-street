import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import IMG1 from '../../../images/china.avif';
// import IMG2 from '../../../images/manek_pizza.jpg';
// import IMG3 from '../../../images/pav-Bhaji.jpg';
// import IMG4 from '../../../images/fc.jpg';

const data = [
  {
    id: 2,
    image: IMG1,
    title: "China Town",
    review: 'https://www.google.com/search?q=china+town+juhapura&sca_esv=ef32433310457e91&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0874ISk-GevnfqwMxQZY8XBG9QG-w%3A1713521333238&ei=tUIiZumFDuuPseMPhMCT4AY&ved=0ahUKEwiptIezhM6FAxXrR2wGHQTgBGwQ4dUDCBA&uact=5&oq=china+town+juhapura&gs_lp=Egxnd3Mtd2l6LXNlcnAiE2NoaW5hIHRvd24ganVoYXB1cmEyCxAuGIAEGMcBGK8BMgIQJjILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyGhAuGIAEGMcBGK8BGJcFGNwEGN4EGOAE2AEBSL0XUABY5RNwAHgBkAEAmAHSAqAB4BGqAQcwLjMuNi4xuAEDyAEA-AEBmAIKoAL4EsICChAAGIAEGBQYhwLCAg0QABiABBixAxhDGIoFwgIMEC4YgAQYQxiKBRgKwgIFEAAYgATCAhAQLhiABBgUGIcCGMcBGK8BwgIREC4YgAQYkQIYxwEYigUYrwHCAg0QLhiABBjHARgKGK8BwgIREC4YgAQYxwEYmAUYmQUYrwHCAgcQLhiABBgKwgIfEC4YgAQYFBiHAhjHARivARiXBRjcBBjeBBjgBNgBAcICCBAAGBYYChgewgIKEAAYFhgKGB4YD8ICBhAAGBYYHpgDALoGBggBEAEYFJIHBzAuMi41LjOgB7Zz&sclient=gws-wiz-serp',
    direction: "https://www.google.com/maps?sca_esv=ef32433310457e91&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0874ISk-GevnfqwMxQZY8XBG9QG-w:1713521333238&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiE2NoaW5hIHRvd24ganVoYXB1cmEyCxAuGIAEGMcBGK8BMgIQJjILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyGhAuGIAEGMcBGK8BGJcFGNwEGN4EGOAE2AEBSL0XUABY5RNwAHgBkAEAmAHSAqAB4BGqAQcwLjMuNi4xuAEDyAEA-AEBmAIKoAL4EsICChAAGIAEGBQYhwLCAg0QABiABBixAxhDGIoFwgIMEC4YgAQYQxiKBRgKwgIFEAAYgATCAhAQLhiABBgUGIcCGMcBGK8BwgIREC4YgAQYkQIYxwEYigUYrwHCAg0QLhiABBjHARgKGK8BwgIREC4YgAQYxwEYmAUYmQUYrwHCAgcQLhiABBgKwgIfEC4YgAQYFBiHAhjHARivARiXBRjcBBjeBBjgBNgBAcICCBAAGBYYChgewgIKEAAYFhgKGB4YD8ICBhAAGBYYHpgDALoGBggBEAEYFJIHBzAuMi41LjOgB7Zz&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KWkrp6swhV45Md2AagOXGAMg&daddr=Near+FD+School,+Vishala+Cirlce,+Cross+Road,+Juhapura,+Ahmedabad,+Gujarat+380055",
  },
//   {
//     id: 2,
//     image: IMG2,
//     title: "Manek_Pizza ",
//     review: 'https://www.google.com/search?q=manek+pizza+sandwich&...',
//     direction: "https://www.google.com/maps?rlz=1C1CHBF_enIN988IN988...",
//   },
//   {
//     id: 2,
//     image: IMG3,
//     title: "Bombay Gulalwadi",
//     review: 'https://www.google.com/search?q=Bombay+Gulalwadi+Bhajipav+...',
//     direction: "https://www.google.com/maps/dir//2HFQ%2BG73,+Old+City...",
//   },
//   {
//     id: 2,
//     image: IMG4,
//     title: "Manek foodcourt",
//     review: 'https://www.google.com/search?q=Manek+chowk+food+court...',
//     direction: "https://www.google.com/maps/dir//4G3M%2BWGG,+Sarkhej...",
//   }
];

function Juhapura() {
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

export default Juhapura;
