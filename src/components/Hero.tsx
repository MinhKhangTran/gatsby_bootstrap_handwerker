import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Button } from "react-bootstrap";
import { useMediaQuery } from "../hooks/useMediaQuery";

const Hero = () => {
  let isPageWide = useMediaQuery("(min-width: 992px)");
  if (isPageWide) {
    return (
      <section id="hero">
        <StaticImage
          className="hero_img"
          alt="Hero Image"
          src="../images/hero.jpg"
          formats={["auto", "webp", "avif"]}
          placeholder="tracedSVG"
        />
        <div className="hero_overlay">
          <article className="text-white hero_article">
            <h1>
              Dein Handwerker <br />
              vor Ort
            </h1>
            <p>Rolladenreperatur auf dem höchstem Niveau!</p>
            <Button className="mt-4">Starte jetzt</Button>
          </article>
        </div>
      </section>
    );
  }
  return (
    <section id="hero" style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={4 / 5}
        // This is a presentational image, so the alt should be an empty string
        alt="Hero Image"
        src="../images/hero.jpg"
        formats={["auto", "webp", "avif"]}
      />
      <div
        className="hero_overlay"
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        {/* Any content here will be centered in the component */}
        <article className="text-white hero_article">
          <h1>
            Dein Handwerker <br />
            vor Ort
          </h1>
          <p>Rolladenreperatur auf dem höchstem Niveau!</p>
          <Button>Starte jetzt</Button>
        </article>
      </div>
    </section>
  );
};

export default Hero;
