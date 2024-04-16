import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../styles/HomeStyle.css'
import VideoSource from "../../images/production_id_4236790 (1080p).mp4"

const Section1= () => {
  return (
    <>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg={7} className="mb-5 mb-lg-0">
              <div className="video-container">
                <video autoPlay muted loop className="video-bg">
                  <source src={VideoSource} type="video/mp4" />
                </video>
                <div className="position-relative">
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="hero_text text-center">
                <h1 className="text-white">Hey street</h1>
                <h2 className="text-white">Welcome to the street-food club</h2>
                <p className="text-white pt-2 pb-4">Select the food category</p>
                <Link to="/citi" className="selecta">
                      Veg
                </Link>
                <Link to="/nonveg" className="select">
                  Non-veg
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section1;
