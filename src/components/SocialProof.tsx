import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaAward } from "react-icons/fa";

const SocialProof = () => {
  const awardArray = [
    { id: 1, text: "Rolladen Award" },
    { id: 2, text: "Modernster Handwerker" },
    { id: 3, text: "Bester Arbeitgeber" },
  ];
  return (
    <section id="socialProof">
      <Container className="py-3 py-lg-5">
        <Row>
          {awardArray.map((award) => {
            return (
              <Col lg={4} md={6} key={award.id}>
                <div className="socialproof_award d-flex py-3 py-lg-0 px-5 px-lg-0 align-items-center">
                  <div className="socialproof_icon_wrapper">
                    <FaAward size="4em" className="socialproof_icon" />
                  </div>
                  <div className="socialproof_text">
                    <p className="mb-0">{award.text}</p>
                    <p className="mb-0">2021</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default SocialProof;
