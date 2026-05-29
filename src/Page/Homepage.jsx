import React from 'react'
import Hero from "../components/Homepage/Hero";
import Packages from "../components/Homepage/Packages"
import Transformation from "../components/Homepage/Transformation"
import Work from "../components/Homepage/Work"
import ServicesPricingSection from "../components/Homepage/ServicesPricingSection"
import ContactSection from "../components/Homepage/ContactSection"

import FAQ from "../components/Homepage/FAQ";
import Testimonials from "../components/Homepage/Testimonials";
import DiscoverSection from '../components/Homepage/Discover';

function Home() {
  return (
    <>

      <Hero />
      <Transformation />
      <Packages />
      <DiscoverSection />
      <Work />
      <ServicesPricingSection />
      <Testimonials />
      <FAQ />
      
    
    </>
  );
}

export default Home;
