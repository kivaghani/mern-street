import React from 'react'
import Header from '../../../components/Header'
import IMG1 from '../../../images/HLvada.jpg'
import IMG2 from '../../../images/HL_franki.jpeg'
import IMG3 from '../../../images/HL_sand.jpg'
import Footer from '../../../components/Footer'


const data = [
  {
    id: 2,
    image: IMG1,
    title: "HL Vadapav",
    review: 'https://www.google.com/search?q=hl+vadapav&sca_esv=c36154a2d2ecdf1d&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn092AAGnRi4olieBdhSPrD9Pxf5S8g%3A1709637338454&ei=2v7mZZ2oG_esseMP3YCWoAg&ved=0ahUKEwid_YKy_9yEAxV3VmwGHV2ABYQQ4dUDCBA&uact=5&oq=hl+vadapav&gs_lp=Egxnd3Mtd2l6LXNlcnAiCmhsIHZhZGFwYXYyChAAGEcY1gQYsAMyDRAAGEcY1gQYyQMYsAMyChAAGEcY1gQYsAMyDhAAGIAEGIoFGJIDGLADMg4QABiABBiKBRiSAxiwAzINEAAYgAQYigUYQxiwAzINEAAYgAQYigUYQxiwA0jHAVAAWABwAXgBkAEAmAEAoAEAqgEAuAEDyAEAmAIBoAIEmAMAiAYBkAYHkgcBMaAHAA&sclient=gws-wiz-serp',
    direction: "https://www.google.com/maps?sca_esv=c36154a2d2ecdf1d&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0-jo2QCtNMRuTcyOhCl4wKr7V-YHA:1709637211493&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIgpobCB2YWRhcGF2MhAQLhgUGK8BGMcBGIcCGIAEMgoQABiABBgUGIcCMgUQABiABDIGEAAYFhgeMgYQABgWGB4yAhAmMgIQJjILEAAYgAQYigUYhgMyCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzIfEC4YFBivARjHARiHAhiABBiXBRjcBBjeBBjgBNgBAUjFMlDhC1jQL3ABeAGQAQCYAYQCoAHzGaoBBjAuMTYuMrgBA8gBAPgBAZgCDKACjhHCAgoQABhHGNYEGLADwgINEAAYRxjWBBjJAxiwA8ICDhAAGIAEGIoFGJIDGLADwgIKECMYgAQYigUYJ8ICCxAAGIAEGKIEGIsDwgIFEC4YgATCAgoQABiABBiKBRhDwgITEC4YgAQYigUYQxjHARivARiOBcICCBAAGIAEGLEDwgIQEC4YQxivARjHARiABBiKBcICBxAAGIAEGArCAh8QLhhDGK8BGMcBGIAEGIoFGJcFGNwEGN4EGOAE2AEBwgIHEC4YgAQYCsICCBAuGBYYHhgPmAMAiAYBkAYKugYGCAEQARgUkgcFMS44LjOgB72WAQ&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KYtMZhbthF45Mdm6wjb6D-fU&daddr=2HP3%2B9JF,+Narayan+Park+Society,+Near+H.L.+College+of+Commerce,+India,+Navrangpura,+Ahmedabad,+Gujarat+380009",
  },
  {
    id: 2,
    image: IMG2,
    title: "H. L. Wala Frankie",
    review: 'https://www.google.com/search?q=H.+L.+Wala+Frankie&sca_esv=45b0fae97cc457eb&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0_2BkKM0RIvq7skTNar-0zE4dARFA%3A1709637593153&ei=2f_mZaj8CIfdseMPnpmXiAQ&ved=0ahUKEwjozLyrgN2EAxWHbmwGHZ7MBUEQ4dUDCBA&uact=5&oq=H.+L.+Wala+Frankie&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgBIhJILiBMLiBXYWxhIEZyYW5raWUyBRAAGIAEMgsQLhiABBjHARivATICECYyAhAmMgsQABiABBiiBBiLAzILEAAYgAQYogQYiwNI1wNQAFgAcAB4AZABAJgB0QGgAdEBqgEDMi0xuAEDyAEA-AEC-AEBmAIBoALXAZgDAJIHAzItMaAHtgk&sclient=gws-wiz-serp',
    direction: "https://www.google.com/maps?sca_esv=45b0fae97cc457eb&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0_2BkKM0RIvq7skTNar-0zE4dARFA:1709637593153&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgBIhJILiBMLiBXYWxhIEZyYW5raWUyBRAAGIAEMgsQLhiABBjHARivATICECYyAhAmMgsQABiABBiiBBiLAzILEAAYgAQYogQYiwNI1wNQAFgAcAB4AZABAJgB0QGgAdEBqgEDMi0xuAEDyAEA-AEC-AEBmAIBoALXAZgDAJIHAzItMaAHtgk&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KT3esz80hV45MRJYP-bLzuJq&daddr=Commerce+Six+Rd,+opp.+Hl+College,+Naranpark+Society,+Navrangpura,+Ahmedabad,+Gujarat+380009",
  },
  {
    id: 2,
    image: IMG3,
    title: "Old Lucky Sandwich",
    review: 'https://www.google.com/search?q=Old+Lucky+Sandwich&sca_esv=45b0fae97cc457eb&rlz=1C1CHBF_enIN988IN988&biw=1536&bih=695&tbm=lcl&sxsrf=ACQVn08Fl7B5pF8bPv1z56z-LHvvj9GOUQ%3A1709638080785&ei=wAHnZb7EL93useMPmKua-Ac&ved=0ahUKEwi-pP-Tgt2EAxVdd2wGHZiVBn8Q4dUDCAk&uact=5&oq=Old+Lucky+Sandwich&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIhJPbGQgTHVja3kgU2FuZHdpY2gyBRAAGIAEMgYQABgWGB4yAhAmSMoEUABYAHAAeACQAQCYAbgBoAG4AaoBAzAuMbgBA8gBAPgBAvgBAZgCAaACvAGYAwCSBwMwLjGgB9EC&sclient=gws-wiz-local',
    direction: "https://www.google.com/maps?rlz=1C1CHBF_enIN988IN988&sca_esv=45b0fae97cc457eb&lqi=ChJPbGQgTHVja3kgU2FuZHdpY2hI3t-36cmygIAIWioQABABEAIYABgBGAIiEm9sZCBsdWNreSBzYW5kd2ljaCoICAIQABABEAKSARRmYXN0X2Zvb2RfcmVzdGF1cmFudKoBOxABMh8QASIbUKelVqOKtF_X_sGBBPF4NKhFzjMFMszPjKMUMhYQAiISb2xkIGx1Y2t5IHNhbmR3aWNo&phdesc=F-KrXOBZvEc&vet=12ahUKEwj_vKnagt2EAxWCcmwGHae5CsMQ8UF6BAgFEBg..i&lei=VALnZf_CEILlseMPp_OqmAw&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kdux9wjMhV45MVumL7QGHMfU&daddr=Netaji+Rd,+nr.+GLS+College,+Navrangpura,+Ahmedabad,+Gujarat+380009",
  },
  
  
];

function HLroad  () {
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

export default HLroad



