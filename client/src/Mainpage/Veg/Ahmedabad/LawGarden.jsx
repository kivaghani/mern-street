import React from 'react'
import Header from '../../../components/Header'
import IMG1 from '../../../images/shambhu_cofee.png'
import IMG2 from '../../../images/wow.jpeg'
import IMG3 from '../../../images/kitchen.jpg'
import Footer from '../../../components/Footer'


const data = [
  {
    id: 2,
    image: IMG1,
    title: "Shambhu's Coffee Bar - Happy Street ",
    review: 'https://www.google.com/search?q=Shambhu%27s+Coffee+Bar+-+Happy+Street&rlz=1C1CHBF_enIN988IN988&oq=shambhu+&gs_lcrp=EgZjaHJvbWUqCAgBEEUYJxg7MgYIABBFGDkyCAgBEEUYJxg7MgoIAhAAGMkDGIAEMgoIAxAAGLEDGIAEMgcIBBAAGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg90gEJMTEwMDVqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8',
    direction: "https://www.google.com/maps/dir//Terry's+Kitchen+in+law+garen/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x395e85c769f30639:0xcac2ac871403e8fe?sa=X&ved=1t:3061&ictx=111https://www.google.com/maps/dir//Shambhu's+Coffee+Bar+-+Happy+Street/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x395e85bb48501283:0x2f733d7976d9886a?sa=X&ved=1t:3061&ictx=111",
  },
  {
    id: 2,
    image: IMG2,
    title: "WOW Waffles and Pancakes",
    review: 'https://www.google.com/search?q=WOW+Waffles+and+Pancakes+in+law+garden&rlz=1C1CHBF_enIN988IN988&oq=wow&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg7Mg8IAhBFGDkYgwEYsQMYgAQyCggDEAAYsQMYgAQyDAgEEAAYFBiHAhiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDEzNzBqMGo0qAIIsAIB&sourceid=chrome&ie=UTF-8',
    direction: "https://www.google.com/maps/dir//WOW+Waffles+and+Pancakes+in+law+garden/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x395e852ec004629b:0x65a8312d855492ae?sa=X&ved=1t:3061&ictx=111&cshid=1711774650079048",
  },
  {
    id: 2,
    image: IMG3,
    title: "Terry's Kitchen",
      review: 'https://www.google.com/search?q=Terry%27s+Kitchen+in+law+garen&rlz=1C1CHBF_enIN988IN988&oq=terry&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyDAgCEEUYORixAxiABDIPCAMQLhhDGLEDGIAEGIoFMhIIBBAuGEMYgwEYsQMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgyNzcyajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8   ',
    direction: "https://www.google.com/maps/dir//Terry's+Kitchen+in+law+garen/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x395e85c769f30639:0xcac2ac871403e8fe?sa=X&ved=1t:3061&ictx=111",
  },
  
  
];

function LawGarden  () {
  return (
    <>
      <Header />
      
      <section id='portfolio'>
        <h2 className='text-white'> Select The Food</h2>
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

export default LawGarden  



