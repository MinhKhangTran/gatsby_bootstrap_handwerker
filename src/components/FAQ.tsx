import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FAQ = () => {
  const faqArray = [
    {
      id: 1,
      frage: "Frage #1",
      antwort:
        "Find box a little too small and curl up with fur hanging out fall over dead (not really but gets sypathy) hate dogs and iâ€™m so hungry iâ€™m so hungry but ew not for that do doodoo in the litter-box.",
    },
    {
      id: 2,
      frage: "Frage #2",
      antwort:
        "There's a forty year old lady there let us feast ptracy, so attack feet, so slap owner's face at 5am until human fills food dish or love me!. Wake up human for food at 4am more napping, more napping all the napping is exhausting. ",
    },
    {
      id: 3,
      frage: "Frage #3",
      antwort:
        "Cat not kitten around sitting in a box. Chase ball of string all of a sudden cat goes crazy, but flee in terror at cucumber discovered on floor.",
    },
    {
      id: 4,
      frage: "Frage #4",
      antwort:
        "Peer out window, chatter at birds, lure them to mouth crash against wall but walk away like nothing happened so take a deep sniff of sock then walk around with mouth half open but chew the plant show belly for leave hair on owner's clothes.",
    },
  ];
  return (
    <section id="faq" className="section">
      <Container>
        <Row>
          <Col md={4} lg={5}>
            <h2 className="text-primary mb-4">Häufig gestellte Fragen</h2>
            <p className="lead text-secondary">
              Pretend not to be evil meowsiers. Bleghbleghvomit my furball
              really tie the room together sleep in the bathroom sink meow meow.
            </p>
          </Col>
          <Col md={8} lg={7}>
            <Row>
              {faqArray.map((faq) => {
                return (
                  <Col xs={12} key={faq.id} className="fragen">
                    <h3>{faq.frage}</h3>
                    <p className="lead text-secondary">{faq.antwort}</p>
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

export default FAQ;
