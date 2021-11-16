import * as React from "react";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Process from "../components/Process";
import SEO from "../components/Seo";
import SocialProof from "../components/SocialProof";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Zeitstrahl from "../components/Zeitstrahl";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <Hero />
      <SocialProof />
      <Features />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
      <Team />
      <Zeitstrahl />
    </Layout>
  );
};

export default IndexPage;
