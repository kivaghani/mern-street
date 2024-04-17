import React from "react";
import {  Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../styles/Veg.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function SuratArea() {
  return (
    <>
      <Header />
      <section className="vegi">
            <Col className="nameee">
              <h2>Select The Area</h2>

              <div className="state">
                <Link as={Link} to="/bigbazargali" className="Statename">
               Dummas, Big Bazar Gali
                </Link>
                <Link as={Link} to="/piplod" className="Statename">
               Dummas, Piplod Road
                </Link>
                <Link as={Link} to="/kiranchowk" className="Statename">
               Kiran Chowk
                </Link>
                <Link as={Link} to="/hirabag" className="Statename">
               Hirabag, Khaudhra Gali
                </Link>
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

export default SuratArea;
