import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, SetNav] = useState(false);

  useEffect(() => {
    SetNav(false);
  }, []);
  const handleNav = () => {
    SetNav(!nav);
  };

  const closeNav = () => {
    SetNav(false)
  }
  return (
    <div className="sticky top-0 flex justify-between items-center w-[100%] mx-auto px-4 h-17 text-black bg-white z-50">
      <h1 className="w-full font-bold text-2xl">
        <a href="/">BF.</a>
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <a href="#about">ABOUT</a>
        </li>
        <li className="p-4">
          <a href="#skill">SKILLS</a>
        </li>
        <li className="p-4">
          <a href="#project">PROJECT</a>
        </li>
        <li className="p-4">
          <a href="#experience">EXPERIENCE</a>
        </li>
        <li className="p-4">
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "text-sm fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-200 bg-white ease-in-out duration-500 z-50"
            : "fixed left-[-100%] h-full ease-in-out duration-500 "
        }
      >
        <h1 className="w-full font-bold text-2xl p-7">
          <a href="/">BF.</a>
        </h1>
        <li className="p-4 border-b border-gray-100">
          <a href="#about" onClick={closeNav}>ABOUT</a>
        </li>
        <li className="p-4 border-b border-gray-100">
          <a href="#skill" onClick={closeNav}>SKILLS</a>
        </li>
        <li className="p-4 border-b border-gray-100">
          <a href="#project" onClick={closeNav}>PROJECT</a>
        </li>
        <li className="p-4 border-b border-gray-100">
          <a href="experince" onClick={closeNav}>EXPERIENCE</a>
        </li>
        <li className="p-4">
          <a href="#contact" onClick={closeNav}>CONTACT</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
