import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaHammer, FaLeaf, FaHome } from "react-icons/fa";

const Features = () => {
  const featureArray = [
    {
      id: 1,
      icon: <FaHammer size="2em" className="feature_icon" />,
      title: "Moderne Werkzeuge",
      text: "Sit as close as possible to warm fire without sitting on cold floor ",
    },
    {
      id: 2,
      icon: <FaLeaf size="2em" className="feature_icon" />,
      title: "Umweltfreundlich",
      text: "Toilet paper attack claws fluff everywhere meow miao french ciao ",
    },
    {
      id: 3,
      icon: <FaHome size="2em" className="feature_icon" />,
      title: "Familienunternehmen",
      text: "most of our time, we are around 15 weeks old i think, i donâ€™t know ",
    },
  ];
  return (
    <section id="features" className="section">
      <Container>
        <Row>
          <Col md={4} lg={5}>
            <h2 className="text-primary mb-4">Das zeichnet uns aus</h2>
          </Col>
          <Col md={8} lg={7}>
            <Row>
              {featureArray.map((feature) => {
                return (
                  <Col md={6} key={feature.id}>
                    <p>
                      {feature.icon}
                      <span className="visually-hidden">{feature.title}</span>
                    </p>
                    <h3>{feature.title}</h3>
                    <p className="lead text-secondary">{feature.text}</p>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
