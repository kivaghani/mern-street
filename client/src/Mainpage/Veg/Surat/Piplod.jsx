import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import IMG1 from '../../../images/mexican.jpg';
import IMG2 from '../../../images/sai.jpeg';
import IMG3 from '../../../images/grill.jpg';
import IMG4 from '../../../images/bmw.jpg';

const data = [
  {
    id: 2,
    image: IMG1,
    title: "Mexican Spicy Salsa",
    review: 'https://www.google.com/search?q=mexican+spicy+salsa+piplod+surat&sca_esv=6946a8fe4d355c0f&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0-AJiJ8xoNrY6DbknuTQszI385bjw%3A1711786982041&ei=5ssHZtP2AZnG4-EPtb64oAM&oq=Mexican+Spicy+Salsa+piplo&gs_lp=Egxnd3Mtd2l6LXNlcnAiGU1leGljYW4gU3BpY3kgU2Fsc2EgcGlwbG8qAggBMgcQIRgKGKABMgcQIRgKGKABMgcQIRgKGKABMgcQIRgKGKABSOgiUABY1QtwAHgBkAEAmAHwAqABkA6qAQUyLTUuMrgBA8gBAPgBAZgCB6ACyQ7CAgsQLhiABBjHARivAcICChAAGIAEGIoFGEPCAgUQABiABMICBhAAGBYYHsICGhAuGIAEGMcBGK8BGJcFGNwEGN4EGOAE2AEBwgILEAAYgAQYigUYhgPCAgUQIRigAZgDALoGBggBEAEYFJIHBTItNS4yoAepIw&sclient=gws-wiz-serp&lqi=CiBtZXhpY2FuIHNwaWN5IHNhbHNhIHBpcGxvZCBzdXJhdEiNhof8ta6AgAhaMhAAEAEQAhgAGAEYAhgDGAQiIG1leGljYW4gc3BpY3kgc2Fsc2EgcGlwbG9kIHN1cmF0kgEKcmVzdGF1cmFudKoBYRABKhciE21leGljYW4gc3BpY3kgc2Fsc2EoADIeEAEiGrqO2jU_k3KxP5t65VoeGsEVxqTZYS1U42qLMiQQAiIgbWV4aWNhbiBzcGljeSBzYWxzYSBwaXBsb2Qgc3VyYXQ#rlimm=5514590563681889082',
    direction: "https://www.google.com/maps?s=web&rlz=1C1CHBF_enIN988IN988&sca_esv=6946a8fe4d355c0f&lqi=CiBtZXhpY2FuIHNwaWN5IHNhbHNhIHBpcGxvZCBzdXJhdEiNhof8ta6AgAhaMhAAEAEQAhgAGAEYAhgDGAQiIG1leGljYW4gc3BpY3kgc2Fsc2EgcGlwbG9kIHN1cmF0kgEKcmVzdGF1cmFudKoBYRABKhciE21leGljYW4gc3BpY3kgc2Fsc2EoADIeEAEiGrqO2jU_k3KxP5t65VoeGsEVxqTZYS1U42qLMiQQAiIgbWV4aWNhbiBzcGljeSBzYWxzYSBwaXBsb2Qgc3VyYXQ&phdesc=hy56wF8IPVM&vet=12ahUKEwiwh8LSx5uFAxWhyDgGHVeFAuEQ1YkKegQIGRAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KS3HVFCFTeA7MTrr-m3mwodM&daddr=Indralok+Complex,+E-203,+Piplod,+Surat,+Gujarat+395007",
  },
  {
    id: 2,
    image: IMG2,
    title: "Sai Fast Food",
    review: 'https://www.google.com/search?q=sai+fast+food+piplod+surat&sca_esv=6946a8fe4d355c0f&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0_Ozprb4CGg3y05CDkOij3XwQ8pBQ%3A1711787359502&ei=X80HZpWSHs3BjuMPntqvoA4&oq=Sai+Fast+Food+piplo&gs_lp=Egxnd3Mtd2l6LXNlcnAiE1NhaSBGYXN0IEZvb2QgcGlwbG8qAggBMgcQIRgKGKABMgcQIRgKGKABMgcQIRgKGKABMgcQIRgKGKABSIEpUCxYsgxwAXgBkAEAmAHKAaAB-AiqAQUwLjQuMrgBA8gBAPgBAZgCB6AClAnCAgoQABhHGNYEGLADwgINEAAYgAQYigUYQxiwA8ICChAAGIAEGIoFGEPCAgUQABiABMICEBAuGEMYrwEYxwEYgAQYigXCAgYQABgWGB7CAgsQABiABBiKBRiGA8ICBBAhGBWYAwCIBgGQBgiSBwUxLjQuMqAHrR0&sclient=gws-wiz-serp',
    direction: "https://www.google.com/maps/dir//sai+fast+food+piplod+surat/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be04d902752a18d:0x1f0b43e2787e7b5?sa=X&ved=1t:3061&ictx=111",
  },
  {
    id: 2,
    image: IMG3,
    title: "GrilledOnTruck FoodTruck",
    review: 'https://www.google.com/search?q=GrilledOnTruck+FoodTruck&rlz=1C1CHBF_enIN988IN988&oq=GrilledOnTruck+FoodTruck&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBBzM1MWowajSoAgCwAgA&sourceid=chrome&ie=UTF-8',
    direction: "https://www.google.com/maps/dir//Grilled+On+Truck+Food+Truck/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be04dfae72a322f:0xf8f91de0c1bcfe4d?sa=X&ved=1t:3061&ictx=111",
  },
  {
    id: 2,
    image: IMG4,
    title: "BEST MEXICAN WORLD (BMW)",
    review: 'https://www.google.com/search?q=BEST+MEXICAN+WORLD+(BMW)&rlz=1C1CHBF_enIN988IN988&oq=BEST+MEXICAN+WORLD+(BMW)&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIICAIQABgWGB4yDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyBggFEEUYPTIGCAYQRRg8MgYIBxBFGDzSAQc0MjJqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8',
    direction: "https://www.google.com/maps?rlz=1C1CHBF_enIN988IN988&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIICAIQABgWGB4yDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyBggFEEUYPTIGCAYQRRg8MgYIBxBFGDzSAQc0MjJqMGo5qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KYfnlNMuTeA7MVWn0uix7A1p&daddr=Dumas+Rd,+Piplod,+Surat,+Gujarat+395007",
  }
];

function Piplod() {
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

export default Piplod;
