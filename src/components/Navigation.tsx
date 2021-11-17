import { Link } from "gatsby";
import React, { useState } from "react";
import { Container, Nav, Navbar, Button, Offcanvas } from "react-bootstrap";
import Logo from "../images/LOGO.svg";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar bg="primary-lighter" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand text-primary">
          <img src={Logo} alt="The handwerker logo" />
        </Link>
        <Button variant="outline-primary" onClick={handleShow}>
          <FaBars size="1.3em" />
          <span className="visually-hidden">Navigation Toggler</span>
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="text-primary">Menü</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto gap-2 fs-5">
              <Link onClick={handleClose} className="nav-link" to="/#hero">
                Home
              </Link>
              <Link onClick={handleClose} className="nav-link" to="/#features">
                Merkmale
              </Link>
              <Link onClick={handleClose} className="nav-link" to="/#process">
                Prozess
              </Link>
              <Link
                onClick={handleClose}
                className="nav-link"
                to="/#testimonials"
              >
                Testimonials
              </Link>
              <Link onClick={handleClose} className="nav-link" to="/#faq">
                FAQ
              </Link>
              <Link onClick={handleClose} className="nav-link" to="/#team">
                Unser Team
              </Link>
              <a className="btn btn-primary mt-3" href="#contact">
                Kontakt
              </a>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
