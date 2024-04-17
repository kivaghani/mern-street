import React from "react";
import {  Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../styles/Veg.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function Barea() {
  return (
    <>
      <Header />
      <section className="vegi">
            <Col className="nameee">
              <h2>Select The Area</h2>

              <div className="state">
                <Link as={Link} to="/ghogha-circle" className="Statename">
               Ghogha circle
                </Link>
                <Link as={Link} to="/nilambag" className="Statename">
               Nilam bag
                </Link>
                {/* <Nav.Link as={Link} to="/sardarnagar" className="Statename">
               Sardarnagar
                </Nav.Link>
                <Nav.Link as={Link} to="/vadla" className="Statename">
               Vadla
                </Nav.Link> */}
                {/* <Nav.Link as={Link} to="/" className="Statename">
               Outer Ring Road
                </Nav.Link>
                <Nav.Link as={Link} to="/" className="Statename">
               Vesu Road
                </Nav.Link> */}
                
           
              </div>
            </Col>
      </section>
      <Footer/>
    </>
  );
}

export default Barea;
