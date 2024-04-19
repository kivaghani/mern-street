import React from 'react';
import { useSelector } from 'react-redux';
import Image1 from "../../images/khaman-dhokla.png";
import Image2 from "../../images/dosa.jpg";
import Image3 from "../../images/idli.jpg";
import Image4 from "../../images/fafda.jpg";
import Image5 from "../../images/pani-puri.jpg";
import Image6 from "../../images/vadapav.jpg";
import Image7 from "../../images/bhajiya.jpg";
import Image8 from "../../images/burger-18.jpg";
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

// Mock Data Cards
const data = [
  {
    id: 1,
    image: Image1,
    title: "Khaman-dhokla",
    read: "https://www.google.com/search?q=khaman-dhokla+details&sca_esv=c5f02fd2b2be415a&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0-_8xJax7O7rKq60YAydtyfeXjy7A%3A1709617791377&ei=f7LmZZzXFuCgnesPrJ2w6AI&ved=0ahUKEwjckqDJttyEAxVgUGcHHawODC0Q4dUDCBA&uact=5&oq=khaman-dhokla+details&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgDIhVraGFtYW4tZGhva2xhIGRldGFpbHMyBhAAGBYYHjIGEAAYFhgeMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgMyCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgMyCxAAGIkFGKIEGIsDSPdkUF9YuGJwAXgBkAEAmAHGAaABrQuqAQMwLji4AQPIAQD4AQGYAgmgAtILwgIKEAAYRxjWBBiwA8ICBBAAGB7CAgYQABgeGA3CAggQABgWGB4YD8ICCBAAGB4YDRgPwgILEAAYgAQYogQYiwPCAggQABgIGB4YDZgDAIgGAZAGCJIHBTEuNS4zoAe5NA&sclient=gws-wiz-serp",
  },
  {
    id: 2,
    image: Image2,
    title: "Dosa",
    read:"https://www.google.com/search?q=dosa+details&sca_esv=c5f02fd2b2be415a&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0-4xTsKGztCH4KiuzBI2S6yNM7dYg%3A1709617816076&ei=mLLmZb2ZBPSsseMPt9quqAo&ved=0ahUKEwi9xYPVttyEAxV0VmwGHTetC6UQ4dUDCBA&uact=5&oq=dosa+details&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIgxkb3NhIGRldGFpbHMyBRAAGIAEMgYQABgHGB4yBhAAGAcYHjIFEAAYgAQyCBAAGAcYHhgPMgYQABgHGB4yBhAAGAcYHjIIEAAYBxgeGA8yBhAAGAcYHjIIEAAYBRgHGB5I4BpQZFjhFXABeAGQAQCYAbsBoAGaDKoBAzAuObgBA8gBAPgBAZgCB6ACwwjCAgoQABhHGNYEGLADwgIHECMYsAIYJ8ICCxAAGIAEGIoFGIYDwgILEAAYiQUYogQYiwPCAgsQABiABBiiBBiLA8ICDRAAGIAEGIoFGEMYsQPCAgsQABiABBiKBRiRApgDAIgGAZAGCJIHAzEuNqAHqjY&sclient=gws-wiz-serp"
  },
  {
    id: 3,
    image: Image3,
    title: "Idli-Sambhar",
    read:"https://www.google.com/search?q=Idli-sambhar+details&sca_esv=c5f02fd2b2be415a&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0_6j9u0q4i8t7eO4WNDLs5sm81-rw%3A1709617870589&ei=zrLmZZ7II6qaseMPysKwMA&ved=0ahUKEwie54LvttyEAxUqTWwGHUohDAYQ4dUDCBA&uact=5&oq=Idli-sambhar+details&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgDIhRJZGxpLXNhbWJoYXIgZGV0YWlsczIIEAAYCBgeGA0yCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgMyCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzILEAAYgAQYogQYiwMyCxAAGIAEGKIEGIsDMgsQABiABBiiBBiLAzILEAAYgAQYogQYiwNIzj9QhgFYljxwBHgBkAEAmAHjAaABxBaqAQYwLjE2LjG4AQPIAQD4AQGYAg-gAswOwgIKEAAYRxjWBBiwA8ICBRAAGIAEwgIGEAAYBxgewgINEAAYgAQYigUYQxixA8ICBxAAGIAEGA3CAgQQABgemAMAiAYBkAYIkgcENC4xMaAHl2c&sclient=gws-wiz-serp"
  },
  {
    id: 4,
    image: Image4,
    title: "Fafda-jalebi",
    read:"https://www.google.com/search?q=fafda-jalebi+details&sca_esv=c5f02fd2b2be415a&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn09r1tXupIsXnQv12nhVmS14FE646A%3A1709617896021&ei=6LLmZZNyrJGd6w-lsZHQAQ&ved=0ahUKEwiThpP7ttyEAxWsSGcHHaVYBBoQ4dUDCBA&uact=5&oq=fafda-jalebi+details&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIhRmYWZkYS1qYWxlYmkgZGV0YWlsczIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBEjLL1DLAVjWLXABeAGQAQCYAZECoAHoF6oBBjAuMTUuMrgBA8gBAPgBAZgCDKACohDCAgoQABhHGNYEGLADwgIIEAAYCBgeGA3CAgsQABiABBiKBRiGA8ICCxAAGIAEGKIEGIsDwgINEAAYgAQYigUYQxixA8ICBhAAGAcYHsICBRAAGIAEwgIHEAAYgAQYDcICCBAAGAUYBxgewgIIECEYoAEYwwTCAgoQIRgKGKABGMMEmAMAiAYBkAYIkgcFMS45LjKgB7hO&sclient=gws-wiz-serp"
  },
  {
    id: 5,
    image: Image5,
    title: "Pani-puri",
    read:"https://www.google.com/search?q=pani-puri+details&sca_esv=c5f02fd2b2be415a&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0-E3Xq429CCkerv0kzpkF-xfYG7eA%3A1709617922503&ei=ArPmZZehHvyhseMPkZqn2AE&ved=0ahUKEwiXquOHt9yEAxX8UGwGHRHNCRsQ4dUDCBA&uact=5&oq=pani-puri+details&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgDIhFwYW5pLXB1cmkgZGV0YWlsczIIEAAYCBgeGA8yCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgMyCxAAGIAEGIoFGIYDMgsQABiABBiiBBiLAzILEAAYgAQYogQYiwNIpCFQTljBH3ABeAGQAQGYAcYBoAHgEqoBBDAuMTS4AQPIAQD4AQGYAgmgAuwKwgIKEAAYRxjWBBiwA8ICCBAAGIAEGKIEwgIOEAAYgAQYigUYkQIYsQPCAgYQABgHGB7CAgUQABiABMICCBAAGAcYHhgPwgIEEAAYHsICCBAAGAUYBxgewgIGEAAYBRgewgIIEAAYBRgeGArCAgoQABgIGAcYHhgPmAMAiAYBkAYIkgcDMS44oAevTw&sclient=gws-wiz-serp"
  },
  {
    id: 6,
    image: Image6,
    title: "Vadapav",
    read:"https://www.google.com/search?q=vadapav+details&sca_esv=c5f02fd2b2be415a&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn09u_dbUOxaV0Ay4Wp5rg62Sxft1QQ%3A1709617939288&ei=E7PmZaWSEdadseMP6paR4A8&ved=0ahUKEwjl5-OPt9yEAxXWTmwGHWpLBPwQ4dUDCBA&uact=5&oq=vadapav+details&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgDIg92YWRhcGF2IGRldGFpbHMyCBAAGAUYBxgeMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgMyCxAAGIAEGKIEGIsDMgsQABiABBiiBBiLAzILEAAYgAQYogQYiwNIpxpQnwFY4RdwAXgBkAEAmAHIAaABgRGqAQYwLjExLjG4AQPIAQD4AQGYAgegAs8IwgIKEAAYRxjWBBiwA8ICDRAAGEcY1gQYyQMYsAPCAg4QABiABBiKBRiSAxiwA8ICChAAGAgYBxgeGA_CAg4QABiABBiKBRiRAhixA8ICBhAAGAcYHsICChAAGIAEGIoFGEPCAgUQABiABMICChAAGAcYHhgPGArCAggQABgHGB4YD8ICBhAAGB4YDcICChAAGAUYHhgNGA-YAwCIBgGQBgqSBwMxLjagB5ZL&sclient=gws-wiz-serp"
  },
  {
    id: 7,
    image: Image7,
    title: "Bhajiya",
    read:"https://www.google.com/search?q=bhajiya+details&sca_esv=c5f02fd2b2be415a&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn0-PAmf2Fe5ZdC0Cd2uSgplqg1-WVw%3A1709617955127&ei=I7PmZfGqB4bfseMPj-OHiAk&ved=0ahUKEwixyKqXt9yEAxWGb2wGHY_xAZEQ4dUDCBA&uact=5&oq=bhajiya+details&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIg9iaGFqaXlhIGRldGFpbHMyCBAhGKABGMMEMggQIRigARjDBDIIECEYoAEYwwRIlBZQfFi-FHABeAGQAQCYAdsBoAGbEKoBBjAuMTEuMbgBA8gBAPgBAZgCB6ACmQjCAgoQABhHGNYEGLADwgIGEAAYBxgewgIGEAAYHhgNwgIIEAAYBRgHGB7CAgoQABgFGB4YDRgPwgILEAAYgAQYigUYhgPCAgsQABiABBiiBBiLA8ICDRAAGIAEGIoFGEMYsQPCAg4QABiABBiKBRiRAhixA8ICCxAAGIAEGIoFGJECwgIREAAYgAQYigUYkQIYsQMYgwHCAggQABgHGB4YD8ICCxAAGIkFGKIEGIsDmAMAiAYBkAYIkgcDMS42oAe3SA&sclient=gws-wiz-serp"
  },
  {
    id: 8,
    image: Image8,
    title: "Classic Burger",
    read:"https://www.google.com/search?q=burger+details&sca_esv=c5f02fd2b2be415a&rlz=1C1CHBF_enIN988IN988&sxsrf=ACQVn096msTkoGEcOHaYyK2o9Oz3EzmKGw%3A1709617988894&ei=RLPmZbmJNvzhseMPj--t6AE&ved=0ahUKEwi5u7ent9yEAxX8cGwGHY93Cx0Q4dUDCBA&uact=5&oq=burger+details&gs_lp=Egxnd3Mtd2l6LXNlcnAiDmJ1cmdlciBkZXRhaWxzMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgUQABiABDIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHkjSHFBJWIwZcAJ4AZABAJgBuwGgAZYNqgEEMC4xMLgBA8gBAPgBAZgCB6AC5gbCAgoQABhHGNYEGLADwgIIEAAYgAQYogTCAg0QABiABBiKBRhDGLEDwgIOEAAYgAQYigUYkQIYsQPCAgsQABiABBiKBRiRAsICERAAGIAEGIoFGJECGLEDGIMBmAMAiAYBkAYIkgcDMi41oAfzOw&sclient=gws-wiz-serp"
  },
];


function Section3  () {
  const { currentUser } = useSelector((state) => state.user);
  const handleButtonClick = () => {
    alert('To unlock this feature, please sign in.');
  };

  return (
    <>
      <Header />
      <section id='portfolio'>
        <h2 className='text-center text-white'>Most Popular Food</h2>
        <div className='container portfolio__container'>
          {data.map(({ id, image, title, read }) => {
            return (
              <article key={id} className='portfolio-item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  {currentUser ? (
                    <a href={read} className='dr'>
                      Read more...
                    </a>
                  ) : (
                    <Link to="/sign-in">
                    <button
                      className="text-white font-bold py-2 px-4 rounded bg-red-950 hover:bg-yellow-500"
                      onClick={handleButtonClick}
                    >
                      Read more
                    </button>
                  </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Section3;