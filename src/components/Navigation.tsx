import { Link } from "gatsby";
import React, { useState } from "react";
import { Container, Nav, Navbar, Button, Offcanvas } from "react-bootstrap";
import Logo from "../images/LOGO.svg";

const Navigation = () => {
  return (
    <Navbar bg="primary-lighter" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand text-primary">
          <img src={Logo} alt="The handwerker logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" data-cy="nav_button" />
        <Navbar.Collapse id="basic-navbar-nav" data-cy="nav_collapse">
          <Nav className="ms-auto gap-2 fs-5">
            <Link className="nav-link" to="/#hero" style={{ color: "#59625e" }}>
              Home
            </Link>
            <Link
              className="nav-link"
              to="/#features"
              style={{ color: "#59625e" }}
            >
              Merkmale
            </Link>
            <Link
              className="nav-link"
              to="/#process"
              style={{ color: "#59625e" }}
            >
              Prozess
            </Link>
            <Link
              className="nav-link"
              to="/#testimonials"
              style={{ color: "#59625e" }}
            >
              Testimonials
            </Link>
            <Link className="nav-link" to="/#faq" style={{ color: "#59625e" }}>
              FAQ
            </Link>
            <Link className="nav-link" to="/#team" style={{ color: "#59625e" }}>
              Unser Team
            </Link>
          </Nav>
          <a
            className="btn btn-primary mt-3 mt-lg-0 d-grid ms-lg-3"
            href="#contact"
          >
            Kontakt
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
