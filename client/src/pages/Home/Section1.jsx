import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import VideoSource from "../../images/production_id_4236790 (1080p).mp4"; // Import your video file

const Section1 = () => {
  const { currentUser } = useSelector((state) => state.user);
  const handleButtonClick = () => {
    alert('To unlock this feature, please sign in.');
  };
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
                {currentUser ? (
                  <Link to='/citi' className='selecta'>
                    Veg
                  </Link>
                ) : (
                  <Link to="/sign-in" className="selecta" onClick={handleButtonClick}>
                    Veg
                  </Link>
                )}
                {currentUser ? (
                  <Link to='/nonveg' className='selecta'>
                    Non-Veg
                  </Link>
                ) : (
                  <Link to="/sign-in" className="selecta" onClick={handleButtonClick}>
                    Non-Veg
                  </Link>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section1;
