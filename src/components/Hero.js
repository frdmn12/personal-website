import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { AiOutlineExport } from "react-icons/ai";
const Hero = () => {
  const seqGreat = [
    "I Code",
    1000,
    "I Design",
    1000,
    "I Build",
    1000,
    "I Read ",
    1000,
  ];
  return (
    <div className="my-40" >
      <div className="max-w-[850px] mt-[96px] mb-16 mx-8 sm:mx-32">
        <h1 className="text-3xl  sm:text-5xl font-bold mb-4">
          Hello, I'm {""}
          <span className="text-[#116A7B] underline">Bayu Ferdiman</span>, a
          software engineer who builds applications that users love.{" "}
          <TypeAnimation
          preRenderFirstString={true}
            className="font-bold"
            sequence={seqGreat}
            speed={50}
            repeat={Infinity}
            aria-hidden="true"
          />
        </h1>
        <p className="text-sm mb-4">
          I am a computer science student from Binus University. Im interect
          with Web Development. Currently focusing on building applications that
          are both simple and fun to use.{" "}
        </p>
        <a
          className="bg-[#6096B4] max-w-[200px] p-1 text-white rounded-2xl flex items-center justify-center"
          href="https://www.linkedin.com/in/bayu-ferdiman/"
          target="_blank"
          rel="noreferrer"
        >
          Connect With Me
          {/* <AiOutlineExport size="15px" className="m-2" /> */}
        </a>
      </div>
    </div>
  );
};

export default Hero;
