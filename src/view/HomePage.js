import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";

const HomePage = () => {
  return (
    <div className="scr">
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
    </div>
  );
};

export default HomePage;
