import React from "react";
import photoProfile from "../assets/photo_profile.jpg";
import LoadingSpin from "./LoadingSpin";

const About = () => {
  return (
    <div className="bg-black text-white mt-40">
      <div className=" p-[70px] flex flex-col items-center">
        <h1 className="text-5xl  font-bold mb-5">About</h1>
        <div className="column gap-10 text-center md:text-left md:flex justify-center content-center items-center">
          <div
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation="[fade-in-up_1s_ease-in-out]"
          >
            <img
              src={photoProfile ? photoProfile : LoadingSpin}
              alt="photo_profile"
              className="mx-auto max-w-[200px] md:max-w-[300px] rounded-xl saturate-0 hover:saturate-100"
            />
          </div>
          <div className="m-2">
            <p className="font-medium text-sm md:text-xl">
              Hello! My name is{" "}
              <span className="text-[#6096B4] font-semibold">
                Bayu Ferdiman
              </span>
              . I was interested in the world of programming when I was amazed
              by a program that could guess an even or odd number. Then since
              2021, during the covid-19 pandemic, I spent my free time learning
              Fullstack Development, especially in the javascript ecosystem.
              Fast-forward to today, I am currently a{" "}
              <span className="text-[#6096B4] font-semibold">
                {" "}
                Computer Science Student from Binus University{" "}
              </span>
              . I am starting to feel comfortable with the current learning
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
