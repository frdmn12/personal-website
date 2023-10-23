import React from "react";
import photoProfile from "../assets/photoProfile.jpg";

const About = () => {
  return (
    <div className="bg-black text-white mt-40">
      <div className=" p-[70px] flex flex-col items-center">
        <h1 className="text-5xl  font-bold mb-5">About</h1>
        <div className="column gap-10 text-center md:text-left md:flex justify-center content-center items-center">
          <div>
            <img
              src={photoProfile}
              alt="photo_profile"
              className="mx-auto max-w-[200px] md:max-w-[300px] rounded-xl "
            />
          </div>
          <div className="m-2">
            <p className="font-medium">
              Hello! My name is{" "}
              <span className="text-[#6096B4] font-semibold">Bayu Ferdiman</span>. I was
              interested in the world of programming when I was amazed by a
              program that could guess an even or odd number. Then since 2021,
              during the covid-19 pandemic, I spent my free time learning
              Fullstack Development, especially in the javascript ecosystem.
              Fast-forward to today, I am currently a{" "}
              <span className="text-[#6096B4] font-semibold"> Computer Science Student from Binus University </span>. I
              am starting to feel comfortable with the current learning
              environment with friends who have the same interest in the world
              of programming technology. I am currently focusing on
              Fullstack-Website Development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
