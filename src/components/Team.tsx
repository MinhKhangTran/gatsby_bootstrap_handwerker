import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Team = () => {
  return (
    <section id="team" className="section">
      <Container>
        <Row>
          <Col md={6}>
            <h2 className="text-primary">Unser Team</h2>
            <p className="lead text-secondary">
              Flex claws on the human's belly and purr like a lawnmower fight
              own tail for refuse to come home when humans are going to bed;
              stay out all night then yowl like i am dying at 4am
            </p>
          </Col>
          <Col md={6}>
            <article className="d-flex align-items-center gap-4">
              <div>
                <StaticImage
                  src="../images/team-1-min.png"
                  alt="john foster senior"
                  height={150}
                  width={150}
                  objectFit="contain"
                />
              </div>
              <div>
                <h3>John Foster Senior</h3>
                <p className="lead text-secondary subtitle">Founder</p>
              </div>
            </article>
            <article className="d-flex align-items-center gap-4 mt-4">
              <div>
                <StaticImage
                  src="../images/team-2-min.png"
                  alt="john foster junior"
                  height={150}
                  width={150}
                  objectFit="contain"
                />
              </div>
              <div>
                <h3>John Foster Junior</h3>
                <p className="lead text-secondary subtitle">Co-Founder</p>
              </div>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Team;
