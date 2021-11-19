import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const CTA = () => {
  return (
    <section
      style={{ background: "#e5fef3" }}
      id="cta"
      className="section py-4"
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="order-md-2">
            <StaticImage
              src="../images/cta.jpg"
              alt="cta image - anrufender mann"
            />
          </Col>
          <Col md={6}>
            <h2 className="text-primary mt-3">Bereit für einen Anruf?</h2>
            <p className="lead text-secondary">
              Meow meow mama lick arm hair yet lick human with sandpaper tongue
              but if human is on laptop
            </p>
            <article className="d-flex gap-3">
              <div>
                <FaPhoneAlt className="text-primary" size="2em"></FaPhoneAlt>
                <span className="visually-hidden">Phone</span>
              </div>
              <p className="text-primary">123 4567 890</p>
            </article>
            <article className="d-flex gap-3 mt-3">
              <div>
                <FaEnvelope className="text-primary" size="2em"></FaEnvelope>
                <span className="visually-hidden">E-Mail</span>
              </div>
              <p className="text-primary">handwerker@example.de</p>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTA;
