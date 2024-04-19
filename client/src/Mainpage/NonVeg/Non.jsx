import React from "react";
import {  Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/Veg.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Non() {
  return (
    <>
      <Header />
      <section className="vegi">
      <Col className="nameee">
  <h2>Select Your Cities</h2>
  <div className="state ">
    <Link as={Link} to="/ahmedabad-area" className="Statename">
      Ahmedabad
    </Link>
    <Link as={Link} to="/" className="Statename">
      Surat
    </Link>
    <Link as={Link} to="/" className="Statename">
      Rajkot
    </Link>
    <Link as={Link} to="/" className="Statename">
      Vadodara
    </Link>
    <Link as={Link} to="/" className="Statename">
      Bhavnagar
    </Link>
  </div>
</Col>
      </section>
      <Footer/>
    </>
  );
}

export default Non;
