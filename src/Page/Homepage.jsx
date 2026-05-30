import React from 'react'
import Hero from "../components/Homepage/Hero";
import Packages from "../components/Homepage/Packages"
import Transformation from "../components/Homepage/Transformation"

import ServicesPricingSection from "../components/Homepage/ServicesPricingSection"
import ContactSection from "../components/Homepage/ContactSection"

import Testimonials from "../components/Homepage/Testimonials";
import DiscoverSection from '../components/Homepage/Discover';
import FAQSection from '../components/Homepage/Faq';

function Home() {
  return (
    <>

      <Hero />
      <Transformation />
      <Packages />
      <DiscoverSection />
      
     
      <Testimonials />
      <FAQSection />
    </>
  );
}

export default Home;
