import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import IMG1 from '../../../images/hitash.jpeg.jpg';
import IMG2 from '../../../images/mr.jpg';
import IMG3 from '../../../images/shyam.jpg';

const data = [
  {
    id: 2,
    image: IMG1,
    title: "Hitesh-Sandwch",
    review: 'https://www.google.com/search?q=hitesh+sandwich+bhavnagar&rlz=1C1CHBF_enIN988IN988&oq=hitesh+sandwich&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBggCEEUYOTIHCAMQABiABDIICAQQABgWGB4yBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg1MTAwajBqNKgCCLACAQ&sourceid=chrome&ie=UTF-8',
    direction: "https://www.google.com/maps/dir//Q564%2BX3R+Hitesh+Sandwich,+Ghogha+Cir,+Swastik+Society,+Ambawadi,+Krishna+Nagar,+Bhavnagar,+Gujarat+364001/@21.7630109,72.1539382,18.35z/data=!4m17!1m7!3m6!1s0x395f5a6514686187:0xd6724255377c1219!2sHitesh+Sandwich!8m2!3d21.7624956!4d72.1551256!16s%2Fg%2F11c600lhvc!4m8!1m0!1m5!1m1!1s0x395f5a6514686187:0xd6724255377c1219!2m2!1d72.1551256!2d21.7624956!3e9?entry=ttu",
  },
  {
    id: 2,
    image: IMG2,
    title: "MR. FOODIES FAST FOOD",
    review: 'https://www.google.com/search?q=MR.+FOODIES+FAST+FOOD&rlz=1C1CHBF_enIN988IN988&oq=MR.+FOODIES+FAST+FOOD&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg9MgYIAhBFGDwyBggDEEUYPNIBBzkwOGowajmoAgCwAgA&sourceid=chrome&ie=UTF-8&lqi=ChVNUi4gRk9PRElFUyBGQVNUIEZPT0RIssCQ9pC5gIAIWiYQABABEAIQAxgAGAEYAhgDIhRtciBmb29kaWVzIGZhc3QgZm9vZJIBFGZhc3RfZm9vZF9yZXN0YXVyYW50qgFRCgkvbS8wMV9iaHMKCC9tLzAyd2JtEAEyHhABIhpfgirWJWKv64ie7csW6gjV1cI9gnN_xyexmjIYEAIiFG1yIGZvb2RpZXMgZmFzdCBmb29k#rlimm=5024117103928739099',
    direction: "https://www.google.com/maps?s=web&rlz=1C1CHBF_enIN988IN988&lqi=ChVNUi4gRk9PRElFUyBGQVNUIEZPT0RIssCQ9pC5gIAIWiYQABABEAIQAxgAGAEYAhgDIhRtciBmb29kaWVzIGZhc3QgZm9vZJIBFGZhc3RfZm9vZF9yZXN0YXVyYW50qgFRCgkvbS8wMV9iaHMKCC9tLzAyd2JtEAEyHhABIhpfgirWJWKv64ie7csW6gjV1cI9gnN_xyexmjIYEAIiFG1yIGZvb2RpZXMgZmFzdCBmb29k&phdesc=xRSsoSh29Wc&vet=12ahUKEwjl0rmO3ruFAxWxUGcHHa8mB10Q1YkKegQIGRAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KSvhtFJDW185MRsFoxnjP7lF&daddr=SHOP+NO+4+GHOGHA+CIRCLE+SHOPPING+CENTRE,+Ghogha+Cir,+Bhavnagar,+Gujarat+364001",
  },
  {
    id: 2,
    image: IMG3,
    title: "Shyam Dalpur Centre",
    review: 'https://www.google.com/search?q=Shyam+Dalpur+Centre&rlz=1C1CHBF_enIN988IN988&oq=shya&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg5Mg0IAhAuGK8BGMcBGIAEMg8IAxAuGBQYhwIYsQMYgAQyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDI2MjBqMGo5qAIAsAIB&sourceid=chrome&ie=UTF-8',
    direction: "https://www.google.com/maps/dir//Shyam+Dalpur+Centre/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x395f5a656b291a19:0x5d08e2253d7561bd?sa=X&ved=1t:3061&ictx=111&cshid=1712893543854725",
  },
  
];

function Ghogha() {
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

export default Ghogha;
