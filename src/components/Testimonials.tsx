import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Quote from "../images/quote-left-solid 1.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useMediaQuery } from "../hooks/useMediaQuery";

const Testimonials = () => {
  let isTabletPage = useMediaQuery("(min-width: 768px)");
  let isWidePage = useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    let dots = document.querySelectorAll(".dot");
    console.log(dots);

    dots.forEach((dot) => {
      return dot.setAttribute("role", "");
    });
  }, []);
  if (isWidePage) {
    return (
      <section id="testimonials" className="section">
        <Container>
          <h2 className="text-primary mb-4">Das sagen unsere Kunden</h2>
          <Carousel
            infiniteLoop={true}
            showStatus={false}
            showIndicators={true}
            showThumbs={false}
            autoPlay
          >
            {/* FIRST SLIDE */}
            <div className="h-100 p-5" style={{ background: "#e5fef3" }}>
              <Container>
                <Row>
                  <Col md={4}>
                    <StaticImage
                      src="../images/testimonials-1-min.png"
                      alt="peter stan"
                      height={250}
                      width={250}
                      objectFit="contain"
                    />
                  </Col>
                  <Col md={8}>
                    <article className="position-relative">
                      <div className="position-absolute quote_left">
                        <img src={Quote} alt="quote icon" />
                        <span className="visually-hidden">Quote left</span>
                      </div>
                      <p className="lead text-secondary text-start">
                        Howl uncontrollably for no reason ask to be pet then
                        attack owners hand for poop in the plant pot yet groom
                        forever, stretch tongue and leave it slightly out, blep.
                        Sleep nap sleep over your phone and make cute snoring
                        noises while happily ignoring when being called.
                      </p>

                      <div className="text-start">
                        <h3 className="mb-1 fw-normal">Peter Stan</h3>
                        <p className="lead text-secondary mb-1">CEO, CYAST</p>
                      </div>
                    </article>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* 2ND SLIDE */}
            <div className="h-100 p-5" style={{ background: "#e5fef3" }}>
              <Container>
                <Row>
                  <Col md={4}>
                    <StaticImage
                      src="../images/testimonials-2-min.png"
                      alt="john doe"
                      height={250}
                      width={250}
                      objectFit="contain"
                    />
                  </Col>
                  <Col md={8}>
                    <article className="position-relative">
                      <div className="position-absolute quote_left">
                        <img src={Quote} alt="quote icon" />
                        <span className="visually-hidden">Quote left</span>
                      </div>
                      <p className="lead text-secondary text-start">
                        Pee in the shoe spot something, big eyes, big eyes,
                        crouch, shake butt, prepare to pounce. Catty ipsum
                        intently sniff hand, for eat owner's food yet oooo!
                        dangly balls! jump swat swing flies so sweetly to the
                        floor crash move on wash belly nap for curl up and sleep
                        on the freshly laundered towels for purr when being pet.
                      </p>

                      <div className="text-start">
                        <h3 className="mb-1 fw-normal">John Doe</h3>
                        <p className="lead text-secondary mb-1">CEO, BWMW</p>
                      </div>
                    </article>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* 3RD SLIDER */}
            <div className="h-100 p-5" style={{ background: "#e5fef3" }}>
              <Container>
                <Row>
                  <Col md={4}>
                    <StaticImage
                      src="../images/testimonials-3-min.png"
                      alt="jane doe"
                      height={250}
                      width={250}
                      objectFit="contain"
                    />
                  </Col>
                  <Col md={8}>
                    <article className="position-relative">
                      <div className="position-absolute quote_left">
                        <img src={Quote} alt="quote icon" />
                        <span className="visually-hidden">Quote left</span>
                      </div>
                      <p className="lead text-secondary text-start">
                        Cats woo. Cats are fats i like to pets them they like to
                        meow back cats making all the muffins stretch, my left
                        donut is missing, as is my right somehow manage to catch
                        a bird but have no idea what to do next, so play with it
                        until it dies of shock for hiding behind the couch until
                        lured out by a feathery toy.
                      </p>

                      <div className="text-start">
                        <h3 className="mb-1 fw-normal">Jane Doe</h3>
                        <p className="lead text-secondary mb-1">CEO, Pear</p>
                      </div>
                    </article>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel>
        </Container>
      </section>
    );
  }
  if (isTabletPage) {
    return (
      <section id="testimonials" className="section">
        <Container>
          <h2 className="text-primary mb-4">Das sagen unsere Kunden</h2>
          <Carousel
            infiniteLoop={true}
            showStatus={false}
            showIndicators={true}
            showThumbs={false}
            autoPlay
          >
            {/* FIRST SLIDE */}
            <div className="h-100 p-5" style={{ background: "#e5fef3" }}>
              <Container>
                <Row>
                  <Col md={4}>
                    <StaticImage
                      src="../images/testimonials-1-min.png"
                      alt="peter stan"
                      height={150}
                      width={150}
                      objectFit="contain"
                    />
                  </Col>
                  <Col md={8}>
                    <article className="position-relative">
                      <div className="position-absolute quote_left">
                        <img src={Quote} alt="quote icon" />
                        <span className="visually-hidden">Quote left</span>
                      </div>
                      <p className="lead text-secondary text-start">
                        Howl uncontrollably for no reason ask to be pet then
                        attack owners hand for poop in the plant pot yet groom
                        forever, stretch tongue and leave it slightly out, blep.
                        Sleep nap sleep over your phone and make cute snoring
                        noises while happily ignoring when being called.
                      </p>

                      <div className="text-start">
                        <h3 className="mb-1 fw-normal">Peter Stan</h3>
                        <p className="lead text-secondary mb-1">CEO, CYAST</p>
                      </div>
                    </article>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* 2ND SLIDE */}
            <div className="h-100 p-5" style={{ background: "#e5fef3" }}>
              <Container>
                <Row>
                  <Col md={4}>
                    <StaticImage
                      src="../images/testimonials-2-min.png"
                      alt="john doe"
                      height={150}
                      width={150}
                      objectFit="contain"
                    />
                  </Col>
                  <Col md={8}>
                    <article className="position-relative">
                      <div className="position-absolute quote_left">
                        <img src={Quote} alt="quote icon" />
                        <span className="visually-hidden">Quote left</span>
                      </div>
                      <p className="lead text-secondary text-start">
                        Pee in the shoe spot something, big eyes, big eyes,
                        crouch, shake butt, prepare to pounce. Catty ipsum
                        intently sniff hand, for eat owner's food yet oooo!
                        dangly balls! jump swat swing flies so sweetly to the
                        floor crash move on wash belly nap for curl up and sleep
                        on the freshly laundered towels for purr when being pet.
                      </p>

                      <div className="text-start">
                        <h3 className="mb-1 fw-normal">John Doe</h3>
                        <p className="lead text-secondary mb-1">CEO, BWMW</p>
                      </div>
                    </article>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* 3RD SLIDER */}
            <div className="h-100 p-5" style={{ background: "#e5fef3" }}>
              <Container>
                <Row>
                  <Col md={4}>
                    <StaticImage
                      src="../images/testimonials-3-min.png"
                      alt="jane doe"
                      height={150}
                      width={150}
                      objectFit="contain"
                    />
                  </Col>
                  <Col md={8}>
                    <article className="position-relative">
                      <div className="position-absolute quote_left">
                        <img src={Quote} alt="quote icon" />
                        <span className="visually-hidden">Quote left</span>
                      </div>
                      <p className="lead text-secondary text-start">
                        Cats woo. Cats are fats i like to pets them they like to
                        meow back cats making all the muffins stretch, my left
                        donut is missing, as is my right somehow manage to catch
                        a bird but have no idea what to do next, so play with it
                        until it dies of shock for hiding behind the couch until
                        lured out by a feathery toy.
                      </p>

                      <div className="text-start">
                        <h3 className="mb-1 fw-normal">Jane Doe</h3>
                        <p className="lead text-secondary mb-1">CEO, Pear</p>
                      </div>
                    </article>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel>
        </Container>
      </section>
    );
  }
  return (
    <section id="testimonials" className="section">
      <Container>
        <h2 className="text-primary mb-4">Das sagen unsere Kunden</h2>
        <Carousel
          infiniteLoop={true}
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          className="postion-relative"
          autoPlay
        >
          {/* FIRST SLIDE */}
          <div className="h-100 p-5" style={{ background: "#e5fef3" }}>
            <div className="position-absolute quote_left">
              <img src={Quote} alt="quote icon" />
              <span className="visually-hidden">Quote left</span>
            </div>
            <Container>
              <p className="lead text-secondary text-start">
                Howl uncontrollably for no reason ask to be pet then attack
                owners hand for poop in the plant pot yet groom forever, stretch
                tongue and leave it slightly out, blep. Sleep nap sleep over
                your phone and make cute snoring noises while happily ignoring
                when being called.
              </p>

              <article className="d-flex align-items-center gap-2">
                <StaticImage
                  src="../images/testimonials-1-min.png"
                  alt="peter stan"
                  height={75}
                  width={75}
                  objectFit="contain"
                />
                <div className="text-start">
                  <h3 className="mb-1 fw-normal">Peter Stan</h3>
                  <p className="lead text-secondary mb-1">CEO, CYAST</p>
                </div>
              </article>
            </Container>
          </div>
          {/* 2ND SLIDE */}
          <div className="h-100 p-5" style={{ background: "#e5fef3" }}>
            <div className="position-absolute quote_left">
              <img src={Quote} alt="quote icon" />
              <span className="visually-hidden">Quote left</span>
            </div>
            <Container>
              <p className="lead text-secondary text-start">
                Pee in the shoe spot something, big eyes, big eyes, crouch,
                shake butt, prepare to pounce. Catty ipsum intently sniff hand,
                for eat owner's food yet oooo! dangly balls! jump swat swing
                flies so sweetly to the floor crash move on wash belly nap for
                curl up and sleep on the freshly laundered towels for purr when
                being pet.
              </p>

              <article className="d-flex align-items-center gap-2">
                <StaticImage
                  src="../images/testimonials-2-min.png"
                  alt="John doe"
                  height={75}
                  width={75}
                  objectFit="contain"
                />
                <div className="text-start">
                  <h3 className="mb-1 fw-normal">John Doe</h3>
                  <p className="lead text-secondary mb-1">CEO, BWMW</p>
                </div>
              </article>
            </Container>
          </div>
          {/* 3RD SLIDER */}
          <div className="h-100 p-5" style={{ background: "#e5fef3" }}>
            <div className="position-absolute quote_left">
              <img src={Quote} alt="quote icon" />
              <span className="visually-hidden">Quote left</span>
            </div>
            <Container>
              <p className="lead text-secondary text-start">
                Cats woo. Cats are fats i like to pets them they like to meow
                back cats making all the muffins stretch, my left donut is
                missing, as is my right somehow manage to catch a bird but have
                no idea what to do next, so play with it until it dies of shock
                for hiding behind the couch until lured out by a feathery toy.
              </p>

              <article className="d-flex align-items-center gap-2">
                <StaticImage
                  src="../images/testimonials-3-min.png"
                  alt="jane doe"
                  height={75}
                  width={75}
                  objectFit="contain"
                />
                <div className="text-start">
                  <h3 className="mb-1 fw-normal">Jane Doe</h3>
                  <p className="lead text-secondary mb-1">CEO, Pear</p>
                </div>
              </article>
            </Container>
          </div>
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonials;
