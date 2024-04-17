import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import IMG1 from '../../../images/bhaji.jpeg';
import IMG2 from '../../../images/gathiya.webp';
import IMG3 from '../../../images/savaliya.avif';
import IMG4 from '../../../images/puri.jpg';

const data = [
  {
    id: 2,
    image: IMG1,
    title: "RajuBhai Pavbhaji",
    review: 'https://www.google.com/search?q=RajuBhai+Pavbhaji+bhavnagar&sca_esv=46b4c7e13b37a354&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0_c6i13zZqpYJQVW7iPCVfSkR7Irg%3A1712893913976&ei=2a8YZqujO7KhseMPtaiQaA&ved=0ahUKEwjr856K47uFAxWyUGwGHTUUBA0Q4dUDCBA&uact=5&oq=RajuBhai+Pavbhaji+bhavnagar&gs_lp=Egxnd3Mtd2l6LXNlcnAiG1JhanVCaGFpIFBhdmJoYWppIGJoYXZuYWdhcjIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogRIyy9QfVj1KXABeACQAQCYAcUCoAH1EaoBBzAuNC40LjK4AQPIAQD4AQGYAgugAqkSwgIKEAAYgAQYDRiwA8ICDhAAGIAEGIoFGIYDGLADwgIFECEYnwXCAgYQIRgKGAqYAwCIBgGQBgWSBwcxLjEuNy4yoAeoHA&sclient=gws-wiz-serp',
    direction: "https://www.google.com/maps/dir//RajuBhai+Pavbhaji+bhavnagar/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x395f510075715101:0x5a441ab2021b4ec?sa=X&ved=1t:3061&ictx=111",
  },
  {
    id: 2,
    image: IMG2,
    title: "Bhagwati Gathiya bateta",
    review: 'https://www.google.com/search?q=bhagwati+gathiya+bateta+near+royal+enfield+showroom+bhavnagar&sca_esv=46b4c7e13b37a354&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0-YE-LtbmMo-Sy__E0y128mDiCGXQ%3A1712894390696&ei=trEYZqOYKqSSseMPwISGgAc&oq=bhagwati+gathiya+bateta+near+royal+en&gs_lp=Egxnd3Mtd2l6LXNlcnAiJWJoYWd3YXRpIGdhdGhpeWEgYmF0ZXRhIG5lYXIgcm95YWwgZW4qAggAMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRigATIFECEYoAEyBBAhGBVIpHZQjQJY8GhwBHgAkAEAmAHwAqAB2SKqAQgwLjQuMTMuMrgBA8gBAPgBAZgCE6AC4R7CAgQQIxgnwgIHECMYsAIYJ8ICBxAhGAoYoAHCAgUQIRiSA5gDAIgGAZIHCDMuMi4xMi4yoAebTQ&sclient=gws-wiz-serp&lqi=Cj1iaGFnd2F0aSBnYXRoaXlhIGJhdGV0YSBuZWFyIHJveWFsIGVuZmllbGQgc2hvd3Jvb20gYmhhdm5hZ2FySNrTyb3KrYCACFphEAAQARACEAQQBRAGGAAYARgEGAUYBhgHIj1iaGFnd2F0aSBnYXRoaXlhIGJhdGV0YSBuZWFyIHJveWFsIGVuZmllbGQgc2hvd3Jvb20gYmhhdm5hZ2FyKggIAhAAEAEQApIBCnJlc3RhdXJhbnSqAYMBEAEqGyIXYmhhZ3dhdGkgZ2F0aGl5YSBiYXRldGEoADIfEAEiG-aJkPATyDQbEqyaPfUclh9M6O1hRzi3-tXxpDJBEAIiPWJoYWd3YXRpIGdhdGhpeWEgYmF0ZXRhIG5lYXIgcm95YWwgZW5maWVsZCBzaG93cm9vbSBiaGF2bmFnYXI#rlimm=8262548484957587781',
    direction: "https://www.google.com/maps?s=web&rlz=1C1CHBF_enIN988IN988&sca_esv=46b4c7e13b37a354&lqi=Cj1iaGFnd2F0aSBnYXRoaXlhIGJhdGV0YSBuZWFyIHJveWFsIGVuZmllbGQgc2hvd3Jvb20gYmhhdm5hZ2FySNrTyb3KrYCACFphEAAQARACEAQQBRAGGAAYARgEGAUYBhgHIj1iaGFnd2F0aSBnYXRoaXlhIGJhdGV0YSBuZWFyIHJveWFsIGVuZmllbGQgc2hvd3Jvb20gYmhhdm5hZ2FyKggIAhAAEAEQApIBCnJlc3RhdXJhbnSqAYMBEAEqGyIXYmhhZ3dhdGkgZ2F0aGl5YSBiYXRldGEoADIfEAEiG-aJkPATyDQbEqyaPfUclh9M6O1hRzi3-tXxpDJBEAIiPWJoYWd3YXRpIGdhdGhpeWEgYmF0ZXRhIG5lYXIgcm95YWwgZW5maWVsZCBzaG93cm9vbSBiaGF2bmFnYXI&phdesc=mq42VVdSCI8&vet=12ahUKEwidp-755LuFAxW9RmcHHRngCHcQ1YkKegQIGBAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KW3WrxCXUV85MUXJVvkReKpy&daddr=Q48H%2B77R,+Bhagwati+nasta+centre,+near+Royal+Enfield+Showroom,+Shastrinagar,+Bhavnagar,+Gujarat+364001",
  },
  {
    id: 2,
    image: IMG3,
    title: "Savaliya Bhel Center",
    review: 'https://www.google.com/search?sca_esv=8e47e8b36fbcdee8&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0-jfntbeW9LvlWY7XljKKR3DyK0AA:1712894774636&q=SAVLIYA+BHEL+CENTER+bhavnagar&source=lnms&uds=AMwkrPvmvCopE3yP0qCoXQTLm5SCP6XXgyFa84T3EqfvF71IWTcp2WJarNA4BUrDO0j2vQMEp9ecHE0L9T9-gyJWK-uhTcNcGoSE0iKu9bDHb5mwMTiCKGgWJfCN0cwNHoRlnnAQXuvwgKkINOOw6H8gwJcr3PIc73vxbJ2x67id4mFoYTr9v9XuMN055-xuYY-7XnH3wj0yK15KJbfcdZEk7Ka9ZTn98J5G67xKTSY5RpjaJnFJcR6SLxOrnQcbyqyPA88Cp3D5PsgyQf1RAccbYc623EGloDlOmQdKePado9ePgE1MgTWuu4mdGwS9KSapqUOrxez0R6fFY_pBVi8KZXxnokNMAw&sa=X&ved=2ahUKEwjwt9Gk5ruFAxUUd2wGHe49DyQQ0pQJegQIERAB&biw=1536&bih=695&dpr=1.25',
    direction: "https://www.google.com/maps/dir//SAVLIYA+BHEL+CENTER+bhavnagar/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x395f510b8b404767:0xaa9ee26060c3786f?sa=X&ved=1t:3061&ictx=111",
  },
  {
    id: 2,
    image: IMG4,
    title: "Himmatbhai Puri Shakwala",
    review: 'https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TI-vMC2vTIs3YLRSNagwtjRNM00ys7A0TTU2SzEztTKoSLMwNUgyTzU2SUtKMk5ONvMSycjMzU0sScpIzFQoKC3KVCjOSMwGAFJ8F3I&q=himmatbhai+puri+shak&rlz=1C1CHBF_enIN988IN988&oq=Himmatbhaiu+&gs_lcrp=EgZjaHJvbWUqDwgBEC4YDRivARjHARiABDIGCAAQRRg5Mg8IARAuGA0YrwEYxwEYgAQyCwgCEAAYChgNGIAEMgoIAxAAGAUYDRge0gEINTc1MWowajSoAgiwAgE&sourceid=chrome&ie=UTF-8',
    direction: "https://www.google.com/maps?rlz=1C1CHBF_enIN988IN988&gs_lcrp=EgZjaHJvbWUqDwgBEC4YDRivARjHARiABDIGCAAQRRg5Mg8IARAuGA0YrwEYxwEYgAQyCwgCEAAYChgNGIAEMgoIAxAAGAUYDRge0gEINTc1MWowajSoAgiwAgE&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KWVt45VoW185McY8u0_jt1D4&daddr=Mahathma+Gandi+Road+dhobi+gali,+Jamadar+Sheri,+opp.+Dave+mithai,+Vora,+khargait,+Bhavnagar,+Gujarat+364001",
  } 
];

function Nilambag() {
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

export default Nilambag;
