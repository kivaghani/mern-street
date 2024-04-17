import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import IMG1 from '../../../images/sonal.jpg';
import IMG2 from '../../../images/jugadu.jpg';
import IMG3 from '../../../images/classic.jpg';
import IMG4 from '../../../images/raju.jpg';
import IMG5 from '../../../images/balaji.jpg';


const data = [
  {
    id: 2,
    image: IMG1,
    title: "Sonal Punjabi Food Parcel",
    review: 'https://www.google.com/search?q=Sonal+Punjabi+Food+Parcel&rlz=1C1CHBF_enIN988IN988&oq=Sonal+Punjabi+Food+Parcel&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDINCAIQLhivARjHARiABDIICAMQABgWGB4yDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgxNDg2ajBqOagCALACAQ&sourceid=chrome&ie=UTF-8',
    direction: "https://www.google.com/maps?rlz=1C1CHBF_enIN988IN988&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDINCAIQLhivARjHARiABDIICAMQABgWGB4yDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgxNDg2ajBqOagCALACAQ&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KfPQDN88ylk5MReutjkZyjIl&daddr=Guj+Housing+Board-m+47,+Akshar+Marg,+Opposite+Swaminarayan+Nagar+Temple,+Kalawad+Road,+Akshar+Marg,+Rajkot,+Gujarat+360006",
  },
  {
    id: 2,
    image: IMG2,
    title: "JUGADU VADAPAV",
    review: 'https://www.google.com/search?q=jugadu+vadapav+rajkot&sca_esv=8e47e8b36fbcdee8&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0-S89fCtf_rkx7j22ZH46xVlbdGBg%3A1712896081040&ei=UbgYZpmNAv7bseMPu7uvaA&oq=JUGADU+VADAPAV+rajkt&gs_lp=Egxnd3Mtd2l6LXNlcnAiFEpVR0FEVSBWQURBUEFWIHJhamt0KgIIADIHECEYChigATIHECEYChigATIHECEYChigATIHECEYChigATIHECEYChigAUjRH1BKWIwQcAF4AZABAJgB6gGgAfoIqgEFMC41LjG4AQPIAQD4AQGYAgegAqAJwgIKEAAYRxjWBBiwA8ICCBAAGIAEGKIEwgIFECEYoAGYAwCIBgGQBgiSBwUxLjUuMaAHrBA&sclient=gws-wiz-serp',
    direction: "https://www.google.com/maps?sca_esv=8e47e8b36fbcdee8&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0-S89fCtf_rkx7j22ZH46xVlbdGBg:1712896081040&gs_lp=Egxnd3Mtd2l6LXNlcnAiFEpVR0FEVSBWQURBUEFWIHJhamt0KgIIADIHECEYChigATIHECEYChigATIHECEYChigATIHECEYChigATIHECEYChigAUjRH1BKWIwQcAF4AZABAJgB6gGgAfoIqgEFMC41LjG4AQPIAQD4AQGYAgegAqAJwgIKEAAYRxjWBBiwA8ICCBAAGIAEGKIEwgIFECEYoAGYAwCIBgGQBgiSBwUxLjUuMaAHrBA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KQ3eDSIyy1k5MTW1EQA8C-YC&daddr=No.1+B.K+COMMERCIAL+COMPLEX,+Chowk,+Kishan+Para,+Rajkot,+Gujarat+360001",
  },
  {
    id: 2,
    image: IMG3,
    title: "Classic Food Zone",
    review: 'https://www.google.com/search?q=Classic+Food+Zone+rajkot&sca_esv=8e47e8b36fbcdee8&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0-0UMO6MwQzORcBdowfy2xsPQKGeg%3A1712896198673&ei=xrgYZoPRKLfdseMPreOqqA0&ved=0ahUKEwiDzNXL67uFAxW3bmwGHa2xCtUQ4dUDCBA&uact=5&oq=Classic+Food+Zone+rajkot&gs_lp=Egxnd3Mtd2l6LXNlcnAiGENsYXNzaWMgRm9vZCBab25lIHJhamtvdDIFECEYoAEyBRAhGKABSJ1CUJ0DWOs_cAF4AJABAJgBtAKgAa8LqgEHMC40LjIuMbgBA8gBAPgBAZgCCKAC3wvCAgcQABgeGLADwgIOEAAYgAQYigUYhgMYsAPCAgYQABgWGB7CAgsQABiABBiKBRiGA8ICBxAhGAoYoAHCAgQQIRgVwgIFECEYnwWYAwCIBgGQBgOSBwcxLjQuMi4xoAfAFQ&sclient=gws-wiz-serp',
    direction: "https://www.google.com/maps?sca_esv=8e47e8b36fbcdee8&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0-0UMO6MwQzORcBdowfy2xsPQKGeg:1712896198673&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiGENsYXNzaWMgRm9vZCBab25lIHJhamtvdDIFECEYoAEyBRAhGKABSJ1CUJ0DWOs_cAF4AJABAJgBtAKgAa8LqgEHMC40LjIuMbgBA8gBAPgBAZgCCKAC3wvCAgcQABgeGLADwgIOEAAYgAQYigUYhgMYsAPCAgYQABgWGB7CAgsQABiABBiKBRiGA8ICBxAhGAoYoAHCAgQQIRgVwgIFECEYnwWYAwCIBgGQBgOSBwcxLjQuMi4xoAfAFQ&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KZF6Wsr5Rv8TMZCveaK70VcI&daddr=7QWP%2BMHJ,+Chowk,+opp.+Divya+Bhaskar,+Janta+Society,+Kishan+Para,+Rajkot,+Gujarat+360001",
  },
  {
    id: 2,
    image: IMG4,
    title: "Rajubhai Ke Dal Pakwan",
    review: 'https://www.google.com/search?q=rajubhai+ke+dal+pakwan+rajkot&sca_esv=8e47e8b36fbcdee8&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn08ZiRkuzOmPwtMUzM73G17w6HdXVA%3A1712896329041&ei=SbkYZr2DArLdseMPlo23iA8&ved=0ahUKEwj9y-qJ7LuFAxWybmwGHZbGDfEQ4dUDCBA&uact=5&oq=rajubhai+ke+dal+pakwan+rajkot&gs_lp=Egxnd3Mtd2l6LXNlcnAiHXJhanViaGFpIGtlIGRhbCBwYWt3YW4gcmFqa290MgcQIRgKGKABMgcQIRgKGKABMgcQIRgKGKABSMQiUF9YlyFwBHgAkAEAmAGRAqAB_A6qAQUwLjUuNLgBA8gBAPgBAZgCDaACvQ_CAg4QLhiABBjHARivARiwA8ICBRAhGKABwgIFECEYnwXCAgQQIRgVmAMAiAYBkAYBkgcFNC40LjWgB5os&sclient=gws-wiz-serp',
    direction: "https://www.google.com/maps?sca_esv=8e47e8b36fbcdee8&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn08ZiRkuzOmPwtMUzM73G17w6HdXVA:1712896329041&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiHXJhanViaGFpIGtlIGRhbCBwYWt3YW4gcmFqa290MgcQIRgKGKABMgcQIRgKGKABMgcQIRgKGKABSMQiUF9YlyFwBHgAkAEAmAGRAqAB_A6qAQUwLjUuNLgBA8gBAPgBAZgCDaACvQ_CAg4QLhiABBjHARivARiwA8ICBRAhGKABwgIFECEYnwXCAgQQIRgVmAMAiAYBkAYBkgcFNC40LjWgB5os&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KWN4HOYgylk5MQ3VkgK9IshF&daddr=3,+Raiya+Rd,+Janta+Society,+Race+Course,+Sadar,+Rajkot,+Gujarat+360001",
  },
  {
    id: 2,
    image: IMG5,
    title: "Balaji Sandwich & Foodzone",
    review: 'https://www.google.com/search?q=balaji+sandwich+%26+foodzone&rlz=1C1CHBF_enIN988IN988&oq=Balaji+Sandwich+%26+Foodzone&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyCggCEAAYChgWGB4yDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQcyMjlqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8',
    direction: "https://www.google.com/maps?rlz=1C1CHBF_enIN988IN988&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyCggCEAAYChgWGB4yDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDyoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KbGgb84gylk5MaiHatJuX7Do&daddr=Raiya+Rd,+Opp.+Amrapali+Cinema,+Vaishali+Nagar,+Rajkot,+Gujarat+360007",
  }
];

function Kishanpara() {
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

export default Kishanpara;
