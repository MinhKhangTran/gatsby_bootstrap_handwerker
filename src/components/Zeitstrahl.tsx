import React from "react";
import { Container } from "react-bootstrap";

const Zeitstrahl = () => {
  const zeitstrahlArray = [
    {
      id: 1,
      zeit: 1993,
      text: "Wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep",
    },
    {
      id: 2,
      zeit: 2000,
      text: "again nyan nyan goes the cat, scraaaaape scraaaape goes the walls when the cat murders them with its claws.",
    },
    {
      id: 3,
      zeit: 2008,
      text: "Lounge in doorway the fat cat sat on the mat bat away with paws and dream about hunting birds or bite plants making sure that fluff gets into the owner's eyes. Rub my belly hiss lounge in doorway",
    },
    {
      id: 4,
      zeit: 2020,
      text: "yet sleeps on my head stare at wall turn and meow stare at wall some more meow again continue staring flex claws on the human's belly and purr like a lawnmower. Meow cat meoooow i iz master of hoomaan",
    },
  ];
  return (
    <section id="zeitstrahl" className="mt-4">
      <Container>
        {zeitstrahlArray.map((zeit) => {
          return (
            <article className="mt-5" key={zeit.id}>
              <div className="d-flex gap-2 align-items-center">
                <div className="punkt"></div>
                <h4 className="text-primary mb-0">{zeit.zeit}</h4>
              </div>
              <div className="zeit_kasten bg-green-100 p-2 mt-3">
                <p className="lead mb-0">{zeit.text}</p>
              </div>
            </article>
          );
        })}
      </Container>
    </section>
  );
};

export default Zeitstrahl;
