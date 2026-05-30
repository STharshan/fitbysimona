import React from "react";
import Hero from "../components/Homepage/Hero";
import Packages from "../components/Homepage/Packages";
import Transformation from "../components/Homepage/Transformation";
import Testimonials from "../components/Homepage/Testimonials";
import DiscoverSection from "../components/Homepage/Discover";
import FAQSection from "../components/Homepage/Faq";
import Education from "../components/Homepage/Eduction";
function Home() {
  return (
    <>
      <Hero />
      <Transformation />
      <Packages />
      <DiscoverSection />
      <Testimonials />
      <Education />
      <FAQSection />

    </>
  );
}

export default Home;
