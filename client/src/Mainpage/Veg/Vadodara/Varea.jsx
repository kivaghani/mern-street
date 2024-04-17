import React from "react";
import {  Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../styles/Veg.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function Varea() {
  return (
    <>
      <Header />
      <section className="vegi">
            <Col className="nameee">
              <h2>Select The Area</h2>

              <div className="state">
                <Link as={Link} to="/ratri-bazar" className="Statename">
                Ratri Bazar
                </Link>
                <Link as={Link} to="/alkapuri-road" className="Statename">
                Alkapuri Road
                </Link>
                {/* <Nav.Link as={Link} to="/lawgarden" className="Statename">
                Law Garden
                </Nav.Link>
                <Nav.Link as={Link} to="/municipal-market" className="Statename">
                Municipal Market
                </Nav.Link>
                <Nav.Link as={Link} to="/alakhnootlo" className="Statename">
               Nikol Alakh No Otlo
                </Nav.Link> */}
              </div>
            </Col>
      </section>
      <Footer/>
    </>
  );
}

export default Varea;
