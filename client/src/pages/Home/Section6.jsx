import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import User1 from "../../images/dhrupal.png";
import User2 from "../../images/dhruvil.png";
import User3 from "../../images/anadi.png";
import Header from "../../components/Header";
// import Footer from "../../components/Layouts/Footer";

function Section6() {

  return (
    <>
    <Header/>
    <section className="blog_section">
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User1} className="img-fluid" alt="User-1" />
                </div>
                <p>
                  " This app named History is a very nice one which has all the information of street food in a very nice way "
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY Dhrupal Patel</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User2} className="img-fluid" alt="User-2" />
                </div>
                <p>
                  " This is an amazing website that provides information about the best street food in different cities."
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY dhruvil Kathiriya</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User3} className="img-fluid" alt="User-3" />
                </div>
                <p>
                  " Creativity and the information provided in this website and the ability to store in it such as memory is very much good. "
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY Anadi Hirapara</h5>
              </Carousel.Caption>
            </Carousel.Item>
            
          </Carousel>
        </Row>
      </Container>
    </section>
    {/* <Footer/> */}
    </>
  );
}

export default Section6;