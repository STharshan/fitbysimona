// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./Page/Homepage";

import GDPRConsent from "./components/GDPRBanner.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ScrollToHash from "./components/ScrollToHash.jsx";

import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
       
      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
