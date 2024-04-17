import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo_street.png"; 
import "../styles/HeaderStyle.css"; 
import { useSelector } from 'react-redux';

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  const [nav, setNav] = useState(false);

  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" style={{ flexGrow: 1, justifyContent: 'center' }}>
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active"
              >
                Home
              </NavLink>
              <NavLink
                exact
                to="/about"
                className="nav-link"
                activeClassName="active"
              >
                About
              </NavLink>
              <NavLink
                exact
                to="/menu"
                className="nav-link"
                activeClassName="active"
              >
                Menu
              </NavLink>
              <NavLink
                exact
                to="/blog"
                className="nav-link"
                activeClassName="active"
              >
                Blog
              </NavLink>
              <NavLink
                exact
                to="/contact"
                className="nav-link"
                activeClassName="active"
              >
                Contact
              </NavLink>
              <NavLink
                exact
                to="/memories"
                className="nav-link"
                activeClassName="active"
              >
                Memories
              </NavLink>
              <NavLink
                exact
                to="/gallery"
                className="nav-link"
                activeClassName="active"
              >
                Gallery
              </NavLink>
            </Nav>
            <Nav>
              <Link to={currentUser ? '/profile' : '/sign-in'} className="sign-in-link">
                {currentUser ? (
                  <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
                ) : (
                  <div>Sign In</div>
                )}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
