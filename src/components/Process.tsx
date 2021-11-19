import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useMediaQuery } from "../hooks/useMediaQuery";

const Process = () => {
  let isWidePage = useMediaQuery("(min-width: 992px)");
  const [number, setNumber] = useState(1);
  const processArray = [
    {
      id: 1,
      title: "Kontaktaufnahme",
      text: "Licks paws fall asleep on the washing machine. Mrow i can haz, yet jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed but spot something, big eyes",
    },
    {
      id: 2,
      title: "Besuch vor Ort",
      text: "Meow hide from vacuum cleaner. Sit in a box for hours jump off balcony, onto stranger's head haha you hold me hooman i scratch or pet my belly, you know you want to;",
    },
    {
      id: 3,
      title: "Schnelle Reperatur",
      text: "Meow meow you are my owner so here is a dead bird scratch and i is playing on your console hooman. Rub whiskers on bare skin act innocent. Make meme, make cute face i shredded your linens for you or i just saw other cats inside the house and nobody ask me",
    },
  ];
  if (isWidePage) {
    return (
      <section id="process" className="section">
        <Container>
          <Row>
            <Col md={4} lg={5}>
              <h2 className="text-primary mb-4">Unser Prozess</h2>
            </Col>
            <Col md={8} lg={7}>
              <p className="lead text-secondary">
                Bring your owner a dead bird murr i hate humans they are so
                annoying for eat and than sleep on your face
              </p>
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center">
            <Col lg={5}>
              {processArray.map((process) => {
                return (
                  <div
                    tabIndex={-1}
                    onClick={() => {
                      setNumber(process.id);
                    }}
                    key={process.id}
                    className={`${
                      process.id === number && "active"
                    } process_lg_wrapper`}
                  >
                    <h3 className="text-primary">{process.title}</h3>
                    <p className="lead text-secondary">{process.text}</p>
                  </div>
                );
              })}
            </Col>
            <Col lg={5}>
              {number === 1 && (
                <StaticImage
                  src="../images/process-1.jpg"
                  alt="Kontaktaufnahme Image"
                />
              )}
              {number === 2 && (
                <StaticImage
                  src="../images/process-2.jpg"
                  alt="Besuch vor Ort Image"
                />
              )}
              {number === 3 && (
                <StaticImage
                  src="../images/process-3.jpg"
                  alt="Schnelle Reperatur Image"
                />
              )}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
  return (
    <section id="process" className="section">
      <Container>
        <Row>
          <Col md={4} lg={5}>
            <h2 className="text-primary mb-4">Unser Prozess</h2>
          </Col>
          <Col md={8} lg={7}>
            <p className="lead text-secondary">
              Bring your owner a dead bird murr i hate humans they are so
              annoying for eat and than sleep on your face
            </p>
          </Col>
        </Row>
        <Row className="align-items-center process_wrapper">
          {/* First Image */}
          <Col md={6}>
            <h3 className="text-primary">Kontaktaufnahme</h3>
            <p className="lead text-secondary">
              Licks paws fall asleep on the washing machine. Mrow i can haz, yet
              jump launch to pounce upon little yarn mouse, bare fangs at toy
              run hide in litter box until treats are fed but spot something,
              big eyes
            </p>
          </Col>
          <Col md={6} className="order-md-5">
            <StaticImage
              src="../images/process-1.jpg"
              alt="Kontaktaufnahme Image"
            />
          </Col>
        </Row>

        {/* Second Image */}
        <Row className="align-items-center flex-md-row-reverse process_wrapper">
          <Col md={6} className="mt-5">
            <h3 className="text-primary">Besuch vor Ort</h3>
            <p className="lead text-secondary">
              Meow hide from vacuum cleaner. Sit in a box for hours jump off
              balcony, onto stranger's head haha you hold me hooman i scratch or
              pet my belly, you know you want to;
            </p>
          </Col>
          <Col md={6}>
            <StaticImage
              src="../images/process-2.jpg"
              alt="Besuch vor Ort Image"
            />
          </Col>
        </Row>
        {/* Third Image */}
        <Row className="align-items-center process_wrapper">
          <Col md={6} className="mt-5">
            <h3 className="text-primary">Schnelle Reperatur</h3>
            <p className="lead text-secondary">
              Meow meow you are my owner so here is a dead bird scratch and i is
              playing on your console hooman. Rub whiskers on bare skin act
              innocent. Make meme, make cute face i shredded your linens for you
              or i just saw other cats inside the house and nobody ask me
            </p>
          </Col>
          <Col md={6}>
            <StaticImage
              src="../images/process-3.jpg"
              alt="Schnelle Reperatur Image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Process;
