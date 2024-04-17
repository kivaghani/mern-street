import React from "react";
import { Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/Veg.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Citi() {
  return (
    <>
      <Header />
      <section className="vegi">
        <Col className="nameee">
          <h2>Select Your Cities</h2>
          <div className="state ">
            <Link as={Link} to="/amdavad-area" className="Statename">
              Ahmedabad
            </Link>
            <Link as={Link} to="/suratarea" className="Statename">
              Surat
            </Link>
            <Link as={Link} to="/rajkot" className="Statename">
              Rajkot
            </Link>
            <Link as={Link} to="/vadodara" className="Statename">
              Vadodara
            </Link>
            <Link as={Link} to="/bhavnagar-area" className="Statename">
              Bhavnagar
            </Link>
          </div>
        </Col>
      </section>
      <Footer />
    </>
  );
}

export default Citi;
