import { Link } from "gatsby";
import React, { useState } from "react";
import { Container, Nav, Navbar, Button, Offcanvas } from "react-bootstrap";
import Logo from "../images/LOGO.svg";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  return (
    <Navbar bg="primary-lighter" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand text-primary">
          <img src={Logo} alt="The handwerker logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2 fs-5">
            <Link className="nav-link" to="/#hero">
              Home
            </Link>
            <Link className="nav-link" to="/#features">
              Merkmale
            </Link>
            <Link className="nav-link" to="/#process">
              Prozess
            </Link>
            <Link className="nav-link" to="/#testimonials">
              Testimonials
            </Link>
            <Link className="nav-link" to="/#faq">
              FAQ
            </Link>
            <Link className="nav-link" to="/#team">
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
