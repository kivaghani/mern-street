import React from "react";
import {  Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../styles/Veg.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function Rarea() {
  return (
    <>
      <Header />
      <section className="vegi">
            <Col className="nameee">
              <h2>Select The Area</h2>

              <div className="state">
                <Link as={Link} to="/kishanpara-Circle" className="Statename">
               Kishanpara Circle
                </Link>
                <Link as={Link} to="/sarveshwar-chowk" className="Statename">
               Sarveshwar Chowk
                </Link>
                <Link as={Link} to="/kalavad" className="Statename">
             Kalavad Road
                </Link>
                {/* <Nav.Link as={Link} to="/hirabag" className="Statename">
               Hirabag, Khaudhra Gali
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

export default Rarea;
