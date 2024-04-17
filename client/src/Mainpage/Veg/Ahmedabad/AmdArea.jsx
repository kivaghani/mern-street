import React from "react";
import {  Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../styles/Veg.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function AmdArea() {
  return (
    <>
      <Header />
      <section className="vegi">
            <Col className="nameee">
              <h2>Select The Area</h2>

              <div className="state">
                <Link as={Link} to="/manekchowk" className="Statename">
                Manek chowk
                </Link>
                <Link as={Link} to="/hlroad" className="Statename">
                HL Road
                </Link>
                <Link as={Link} to="/lawgarden" className="Statename">
                Law Garden
                </Link>
                <Link as={Link} to="/municipal-market" className="Statename">
                Municipal Market
                </Link>
                <Link as={Link} to="/alakhnootlo" className="Statename">
               Nikol Alakh No Otlo
                </Link>
                {/* <Nav.Link as={Link} to="/logedIn" className="Statename">
                Approach
                </Nav.Link> */}
           
              </div>
            </Col>
      </section>
      <Footer/>
    </>
  );
}

export default AmdArea;
