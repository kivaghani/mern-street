import React from "react";
import {  Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../styles/Veg.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function AHmedabad() {
  return (
    <>
      <Header />
      <section className="vegi">
            <Col className="nameee">
              <h2>Select The Area</h2>

              <div className="state">
                <Link as={Link} to="/juhapura" className="Statename">
               Juhapura
                </Link>
               
           
              </div>
            </Col>
      </section>
      <Footer/>
    </>
  );
}

export default AHmedabad;
