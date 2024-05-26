import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Pizza from "../../images/pizza.png";
import Salad from "../../images/salad.png";
import Delivery from "../../images/delivery-bike.png";
import Header from '../../components/Header';

const mockData = [
    {
      image: Pizza,
      title: "Area",
      paragraph: `In this app, good street food from different areas have been entered.`,
    },
    {
      image: Salad,
      title: "Qualty Foods",
      paragraph: ` With the help of this app, you can get good quality street food`,
    },
    {
      image: Delivery,
      title: "online order",
      paragraph: `You can also place pre orders in this app and save your time`,
    },
  ];

function Section2() {
  return (
    <>
    <Header/>
    
    <section className='about_section'>
        <Container>
            <Row>
                <Col lg={{ span: 8, offset:2 }} className='text-center'>
                    <h2>The street food tastes better when you eat it with your family</h2>
                    <p> In this street food app you will find information about every
                street food in different cities and different areas.</p>
                <p> Then you can also book a pre order of street food of your choice
                within this street food app.</p>
                <p>In this application also included the old known famous street
                food</p>
                    <Link to="/menu" className='selectabout'>
                        Explor full menu
                    </Link>
                </Col>
            </Row>
        </Container>
    </section>

    <section className='about_wrapper'>
    <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="center"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
    </section>
    {/* <Footer/> */}
    </>
  );
}

export default Section2
