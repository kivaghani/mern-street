import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import IMG1 from '../../../images/jasi.jpeg';
import IMG2 from '../../../images/paras.jpeg';
import IMG3 from '../../../images/momosss.jpg';
import IMG4 from '../../../images/anna.jpg';


const data = [
    {
        id: 2,
        image: IMG1,
        title: "Jassi De Parathe",
        review: 'https://www.google.com/search?q=jassi+de+parathe+vadodara&sca_esv=9a2042a3064e843f&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn08udnA2mivoENEFQrq4xwva4tN7Hg%3A1712987663234&ei=Dx4aZpTuDZSqseMPt9mtiAo&gs_ssp=eJzj4tVP1zc0TDZNMjEyMyw2YLRSNagwtjRNS7ZISjI0MjZMTjGwtDKosDC3NDQCqjI2SbFMNkqy9JLMSiwuzlRISVUoSCxKLMlIVShLTMlPAbIBgHoX9g&oq=jassi+de+parathe+vadodara&gs_lp=Egxnd3Mtd2l6LXNlcnAiGWphc3NpIGRlIHBhcmF0aGUgdmFkb2RhcmEqAggAMgsQLhivARjHARiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgMyGhAuGK8BGMcBGIAEGJcFGNwEGN4EGOAE2AEBSOIgUABYixNwAHgBkAEBmAHYAaABlA-qAQUwLjcuM7gBA8gBAPgBAZgCCqACoRrCAgoQABiABBiKBRhDwgIQEC4YgAQYigUYQxjHARivAcICCxAuGIAEGMcBGK8BmAMAugYGCAEQARgUkgcJMC41LjQuNy0xoAflkQE&sclient=gws-wiz-serp',
        direction: "https://www.google.com/maps?sca_esv=9a2042a3064e843f&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn08udnA2mivoENEFQrq4xwva4tN7Hg:1712987663234&gs_lp=Egxnd3Mtd2l6LXNlcnAiGWphc3NpIGRlIHBhcmF0aGUgdmFkb2RhcmEqAggAMgsQLhivARjHARiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgMyGhAuGK8BGMcBGIAEGJcFGNwEGN4EGOAE2AEBSOIgUABYixNwAHgBkAEBmAHYAaABlA-qAQUwLjcuM7gBA8gBAPgBAZgCCqACoRrCAgoQABiABBiKBRhDwgIQEC4YgAQYigUYQxjHARivAcICCxAuGIAEGMcBGK8BmAMAugYGCAEQARgUkgcJMC41LjQuNy0xoAflkQE&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KQnNMRK7yF85MbnC2TRbLJGH&daddr=Panorama+Complex,+1,+RC+Dutt+Rd,+Opp+Welcome+Hotel,+Alkapuri,+Vadodara,+Gujarat+390007",
      },
      {
        id: 2,
        image: IMG2,
        title: "Paras Juice & Sandwich",
        review: 'https://www.google.com/search?q=Paras+Juice+%26+Sandwich&rlz=1C1CHBF_enIN988IN988&oq=Paras+Juice+%26+Sandwich&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg9MgYIAhBFGDwyBggDEEUYPNIBBzEzNmowajmoAgCwAgE&sourceid=chrome&ie=UTF-8',
        direction: "https://www.google.com/maps?rlz=1C1CHBF_enIN988IN988&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg9MgYIAhBFGDwyBggDEEUYPNIBBzEzNmowajmoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KXHJG3OwyF85MQ9QhmGJKCYc&daddr=Windsor+Plaza,+RC+Dutt+Rd,+Aradhana+Society,+Alkapuri,+Vadodara,+Gujarat+390007",
      },
      {
        id: 2,
        image: IMG3,
        title: "Mom's Momos",
        review: 'https://www.google.com/search?q=mom%27s+momos&rlz=1C1CHBF_enIN988IN988&oq=Mom%27s+Momos&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBwgCEAAYgAQyCAgDEAAYFhgeMgoIBBAAGAoYFhgeMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMTMyMGowajSoAgCwAgE&sourceid=chrome&ie=UTF-8',
        direction: "https://www.google.com/maps/dir//mom's+momos/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x395fc9a1c7b7a23d:0xb3ef6d57d728e478?sa=X&ved=1t:3061&ictx=111",
      },
      {
        id: 2,
        image: IMG4,
        title: "Anna ka Dhosa",
        review: 'https://www.google.com/search?q=anna+dosa+vadodara+alkapuri&sca_esv=9a2042a3064e843f&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0_Sc2tuWZno8Z_I-DWW5B_IKfyUNw%3A1712988119545&ei=1x8aZqH1ILmMseMPp5WZKA&ved=0ahUKEwjhvPqCwr6FAxU5RmwGHadKBgUQ4dUDCBA&uact=5&oq=anna+dosa+vadodara+alkapuri&gs_lp=Egxnd3Mtd2l6LXNlcnAiG2FubmEgZG9zYSB2YWRvZGFyYSBhbGthcHVyaTIREC4YgAQYigUYkQIYxwEYrwEyCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgMyIBAuGIAEGIoFGJECGMcBGK8BGJcFGNwEGN4EGOAE2AEBSKkVUOQFWKkRcAF4AZABAJgBywGgAe4IqgEFMC41LjG4AQPIAQD4AQGYAgegAoUJwgIKEAAYRxjWBBiwA8ICDRAAGEcY1gQYyQMYsAPCAg4QABiABBiKBRiSAxiwA5gDAIgGAZAGCLoGBggBEAEYFJIHBTEuNC4yoAevHw&sclient=gws-wiz-serp',
        direction: "https://www.google.com/maps?sca_esv=9a2042a3064e843f&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0_Sc2tuWZno8Z_I-DWW5B_IKfyUNw:1712988119545&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiG2FubmEgZG9zYSB2YWRvZGFyYSBhbGthcHVyaTIREC4YgAQYigUYkQIYxwEYrwEyCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgMyIBAuGIAEGIoFGJECGMcBGK8BGJcFGNwEGN4EGOAE2AEBSKkVUOQFWKkRcAF4AZABAJgBywGgAe4IqgEFMC41LjG4AQPIAQD4AQGYAgegAoUJwgIKEAAYRxjWBBiwA8ICDRAAGEcY1gQYyQMYsAPCAg4QABiABBiKBRiSAxiwA5gDAIgGAZAGCLoGBggBEAEYFJIHBTEuNC4yoAevHw&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KZWw0WhHyV85MfHYz9O6jtQX&daddr=Bank+of+Baroda+Gulistan+Bunglow,+RC+Dutt+Rd,+Aradhana+Society,+Alkapuri,+Vadodara,+Gujarat+390007",
      },
 
  
];

function Alkapuri() {
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

export default Alkapuri;
