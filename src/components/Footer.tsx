import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import Logo from "../images/LOGO.svg";

const Footer = () => {
  const footerArray = [
    {
      id: 1,
      icon: (
        <FaMapMarkerAlt className="text-primary" size="1.25em"></FaMapMarkerAlt>
      ),
      icon_text: "Standort",
      text: "Musterstraße 1, 12345 City, Germany",
    },
    {
      id: 2,
      icon: <FaPhoneAlt className="text-primary" size="1.25em"></FaPhoneAlt>,
      icon_text: "Phone",
      text: "123 4567 890",
    },
    {
      id: 3,
      icon: <FaEnvelope className="text-primary" size="1.25em"></FaEnvelope>,
      icon_text: "Email",
      text: "handwerker@example.de",
    },
    {
      id: 4,
      icon: <FaClock className="text-primary" size="1.25em"></FaClock>,
      icon_text: "Öffnungszeiten",
      text: "Mo - Sa: 09:00 Uhr bis 17:00 Uhr",
    },
  ];
  return (
    <footer className="bg-green-200 pt-4 pb-2 section">
      <Container>
        <Row className="justify-content-between mb-2">
          <Col lg={4} md={6}>
            <img src={Logo} alt="The handwerker logo" />
            <p className="text-secondary subtitle">
              not hoomaan master of i, oooh damn dat dog. Hate dog plop down in
              the middle where everybody walks for stuff and things ignore the
              squirrels
            </p>
          </Col>
          <Col lg={4} md={6}>
            <h2 className="">Anschrift</h2>
            {footerArray.map((footer) => {
              const { id, icon, icon_text, text } = footer;
              return (
                <article key={id}>
                  <div className="d-flex gap-3">
                    {icon}
                    <span className="visually-hidden">{icon_text}</span>
                    <p className="">{text}</p>
                  </div>
                </article>
              );
            })}
          </Col>
        </Row>
        <p className="text-primary text-center pt-3 copyright">
          &copy; {new Date().getFullYear()}, The Handwerker. All rights reserved{" "}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
