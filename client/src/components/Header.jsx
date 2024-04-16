import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo_street.png";
import "../styles/HeaderStyle.css";
import { useSelector } from "react-redux";
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [nav, setNav] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active"
                onClick={closeSidebar}
              >
                Home
              </NavLink>
              <NavLink
                exact
                to="/about"
                className="nav-link"
                activeClassName="active"
                onClick={closeSidebar}
              >
                About
              </NavLink>
              <NavLink
                exact
                to="/menu"
                className="nav-link"
                activeClassName="active"
                onClick={closeSidebar}
              >
                Menu
              </NavLink>

              <NavLink
                exact
                to="/blog"
                className="nav-link"
                activeClassName="active"
                onClick={closeSidebar}
              >
                Blog
              </NavLink>

              <NavLink
                exact
                to="/contact"
                className="nav-link"
                activeClassName="active"
                onClick={closeSidebar}
              >
                Contact
              </NavLink>
              <NavLink to="/profile">
                {currentUser ? (
                  currentUser.profilePicture ? (
                    <img
                      src={currentUser.profilePicture}
                      alt="profile"
                      className="h-7 w-7 rounded-full object-cover"
                    />
                  ) : (
                    <div>Default Profile Picture</div>
                  )
                ) : (
                  <div>Sign In</div>
                )}
              </NavLink>

              <Nav.Link as={Link} to="#" onClick={handleSidebarToggle}>
                <div className="cart">
                  <TiThMenu />
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={showSidebar} onHide={closeSidebar} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/login" onClick={closeSidebar}>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/profile" onClick={closeSidebar}>
              Your Profile
            </Nav.Link>
            <Nav.Link as={Link} to="/Forgot" onClick={closeSidebar}>
              Edit Profile
            </Nav.Link>

            <Nav.Link as={Link} to="/notes" onClick={closeSidebar}>
              Memories
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery" onClick={closeSidebar}>
              Gallery
            </Nav.Link>

            <Nav.Link as={Link} to="/delete" onClick={closeSidebar}>
              Delete Account
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
