import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skill from "../components/Skill";
import Project from "../components/Project";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="scr">
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="skill">
        <Skill />
      </div>
      <div id="project">
        <Project/>
      </div>
      <div id="contact">
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;
