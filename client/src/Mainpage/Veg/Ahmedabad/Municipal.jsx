import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import IMG1 from '../../../images/swastik.jpg';
import IMG2 from '../../../images/purohit.jpg';
import IMG3 from '../../../images/momos.jpeg';
import IMG4 from '../../../images/bk.jpg';

const data = [
  {
    id: 2,
    image: IMG1,
    title: "Swastik Ragda Petis",
    review: 'https://www.google.com/search?q=swastik+ragda+petis+municipality+ahmedabad&sca_esv=8be3a0dab30d8c4d&rlz=1C1CHBF_enIN988IN988&biw=1536&bih=695&tbm=lcl&sxsrf=ACQVn09p4W_-enl6-AQuT9qRjntGWhxjLA%3A1711777703480&ei=p6cHZo6AHZuJ4-EPpqCPoAk&oq=Swastik+Ragda+Petis+municipl&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIhxTd2FzdGlrIFJhZ2RhIFBldGlzIG11bmljaXBsKgIIAzIHECEYChigATIHECEYChigATIHECEYChigATIHECEYChigAUjDfVDFBFjCZHAHeACQAQCYAd0BoAH9GaoBBjAuMTEuNrgBA8gBAPgBAZgCGKACmRrCAgQQIxgnwgICECbCAgsQABiABBiKBRiGA8ICBhAAGBYYHpgDAIgGAZIHBjcuMTEuNqAHzCU&sclient=gws-wiz-local#rlfi=hd:;si:2737083649678558729,l,Cipzd2FzdGlrIHJhZ2RhIHBldGlzIG11bmljaXBhbGl0eSBhaG1lZGFiYWRI-JzC3Oi1gIAIWkYQABABEAIYABgBGAIYAxgEIipzd2FzdGlrIHJhZ2RhIHBldGlzIG11bmljaXBhbGl0eSBhaG1lZGFiYWQqCAgCEAAQARACkgEKcmVzdGF1cmFudKoBUxABMh8QASIblAXGckyYw5gV5YgKg82L25hxAHALS8ibj7w8Mi4QAiIqc3dhc3RpayByYWdkYSBwZXRpcyBtdW5pY2lwYWxpdHkgYWhtZWRhYmFk,y,TCUwT_2Y-6U;mv:[[23.034423077319026,72.56064306987716],[23.034063122680973,72.56025193012283]]',
    direction: "https://www.google.com/maps/dir//Municipal+Market,+Chimanlal+Girdharlal+Rd,+Vasant+Vihar,+Navrangpura,+Ahmedabad,+Gujarat+380009/@23.0342218,72.4780459,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395e85ec89d05f05:0x25fc1313e39ec609!2m2!1d72.5604501!2d23.0342425?entry=ttu",
  },
  {
    id: 2,
    image: IMG2,
    title: "Purohit sandwich",
    review: 'https://www.google.com/search?q=purohit+sandwich+municipal+market&sca_esv=ffe209feeacdfb2d&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn08hrk6Zebr9T6L6KwWFQvANjWMicA%3A1711777594638&ei=OqcHZv28JoCN4-EPwaiZ6AY&oq=Purohit+sandwich+in+mu&gs_lp=Egxnd3Mtd2l6LXNlcnAiFlB1cm9oaXQgc2FuZHdpY2ggaW4gbXUqAggAMgYQABgWGB4yAhAmMgIQJjILEAAYgAQYigUYhgMyCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgNI-l1Q60xYiFVwAngBkAEAmAHVAaAB_AiqAQUwLjMuM7gBA8gBAPgBAZgCCKACoQnCAg0QABhHGNYEGMkDGLADwgINEAAYRxjWBBiSAxiwA8ICChAAGEcY1gQYsAPCAg4QABiABBiKBRiSAxiwA8ICExAuGIAEGIoFGEMYxwEYrwEYsAPCAhYQLhiABBiKBRhDGJIDGMcBGK8BGI4FwgIIEAAYgAQYyQPCAgsQABiABBiKBRiSA8ICEBAuGBQYrwEYxwEYhwIYgATCAhAQLhiABBiKBRhDGMcBGK8BwgIFEAAYgATCAgsQLhiABBjHARivAcICJRAuGIAEGIoFGEMYkgMYxwEYrwEYjgUYlwUY3AQY3gQY4ATYAQHCAgkQABgWGB4YyQOYAwCIBgGQBga6BgYIARABGBSSBwUyLjMuM6AHwTg&sclient=gws-wiz-serp',
    direction: "https://www.google.com/maps?sca_esv=ffe209feeacdfb2d&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn08hrk6Zebr9T6L6KwWFQvANjWMicA:1711777594638&gs_lp=Egxnd3Mtd2l6LXNlcnAiFlB1cm9oaXQgc2FuZHdpY2ggaW4gbXUqAggAMgYQABgWGB4yAhAmMgIQJjILEAAYgAQYigUYhgMyCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgNI-l1Q60xYiFVwAngBkAEAmAHVAaAB_AiqAQUwLjMuM7gBA8gBAPgBAZgCCKACoQnCAg0QABhHGNYEGMkDGLADwgINEAAYRxjWBBiSAxiwA8ICChAAGEcY1gQYsAPCAg4QABiABBiKBRiSAxiwA8ICExAuGIAEGIoFGEMYxwEYrwEYsAPCAhYQLhiABBiKBRhDGJIDGMcBGK8BGI4FwgIIEAAYgAQYyQPCAgsQABiABBiKBRiSA8ICEBAuGBQYrwEYxwEYhwIYgATCAhAQLhiABBiKBRhDGMcBGK8BwgIFEAAYgATCAgsQLhiABBjHARivAcICJRAuGIAEGIoFGEMYkgMYxwEYrwEYjgUYlwUY3AQY3gQY4ATYAQHCAgkQABgWGB4YyQOYAwCIBgGQBga6BgYIARABGBSSBwUyLjMuM6AHwTg&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KS1rq57zhF45MYnMfAU8d4h5&daddr=10+Municipal+Market+C.G,+Chimanlal+Girdharlal+Road,+Navrangpura,+Ahmedabad,+Gujarat+380009",
  },
  {
    id: 2,
    image: IMG3,
    title: "Delhi's momos",
    review: 'https://www.google.com/search?q=delhi%27s+momos+in+municipal+market+cg+road&rlz=1C1CHBF_enIN988IN988&oq=Delhi%27s+momos+in+mun&gs_lcrp=EgZjaHJvbWUqBwgBECEYoAEyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRigAdIBCDQ4NThqMGo5qAIAsAIB&sourceid=chrome&ie=UTF-8',
    direction: "https://www.google.com/maps?rlz=1C1CHBF_enIN988IN988&gs_lcrp=EgZjaHJvbWUqBwgBECEYoAEyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRigAdIBCDQ4NThqMGo5qAIAsAIB&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KV2ywdWphV45MZw_mku5oHWG&daddr=BSNL,+Chimanlal+Girdharlal+Rd,+Sardar+Patel+Nagar,+Ellisbridge,+Ahmedabad,+Gujarat+380009",
  },
  {
    id: 2,
    image: IMG4,
    title: "B K Nagar Cholafali",
    review: 'https://www.google.com/search?q=b+k+nagar+cholafali&rlz=1C1CHBF_enIN988IN988&oq=B+K+Nagar+Cholafali&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyCAgBEAAYFhgeMggIAhAAGBYYHjIGCAMQRRhAqAIAsAIB&sourceid=chrome&ie=UTF-8&lqi=ChNiIGsgbmFnYXIgY2hvbGFmYWxpSL6Ds7fnlYCACFogEAAQARACGAAYARgCIhJiayBuYWdhciBjaG9sYWZhbGmSAQpmb29kX2NvdXJ0mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVF0TjNBM1pUbDNSUkFCqgE7EAEyHxABIhu6JiYFzTdPwk9vHxj0DhHIu0UfiLIEqoxBq9kyFhACIhJiayBuYWdhciBjaG9sYWZhbGk#rlimm=15986059193004265573',
    direction: "https://www.google.com/maps?s=web&rlz=1C1CHBF_enIN988IN988&lqi=ChNiIGsgbmFnYXIgY2hvbGFmYWxpSL6Ds7fnlYCACFogEAAQARACGAAYARgCIhJiayBuYWdhciBjaG9sYWZhbGmSAQpmb29kX2NvdXJ0mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVF0TjNBM1pUbDNSUkFCqgE7EAEyHxABIhu6JiYFzTdPwk9vHxj0DhHIu0UfiLIEqoxBq9kyFhACIhJiayBuYWdhciBjaG9sYWZhbGk&phdesc=I_xUloDOgfA&vet=12ahUKEwirgs-QpZuFAxVU9DgGHfu3CpwQ1YkKegQIFhAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KZ8KVmVVhF45MWUQY2Uj5Nnd&daddr=6,+Municipal+Market,+Pritam+Nagar,+Ellisbridge,+Ahmedabad,+Gujarat+380006",
  }
];

function Municipal() {
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

export default Municipal;
