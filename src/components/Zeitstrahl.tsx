import React from "react";
import { Container } from "react-bootstrap";

const Zeitstrahl = () => {
  return (
    <section id="zeitstrahl" className="mt-4">
      <Container>
        <article>
          <div className="d-flex gap-2">
            <div className="punkt"></div>
            <p className="text-primary">1993</p>
          </div>
        </article>
      </Container>
    </section>
  );
};

export default Zeitstrahl;
