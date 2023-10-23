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
  return (
    <div className="flex justify-between items-center max-w-[1240px] mx-auto px-4 h-17 text-black ">
      <h1 className="w-full font-bold text-2xl">BF.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">ABOUT</li>
        <li className="p-4">SKILLS</li>
        <li className="p-4">PROJECT</li>
        <li className="p-4">EXPERIENCE</li>
        <li className="p-4">CONTACT</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "text-sm fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-200 bg-white ease-in-out duration-500 z-50"
            : "fixed left-[-100%] h-full ease-in-out duration-500 "
        }
      >
        <h1 className="w-full font-bold text-2xl p-7">BF.</h1>
        <li className="p-4 border-b border-gray-100">ABOUT</li>
        <li className="p-4 border-b border-gray-100">SKILLS</li>
        <li className="p-4 border-b border-gray-100">PROJECT</li>
        <li className="p-4 border-b border-gray-100">EXPERIENCE</li>
        <li className="p-4">CONTACT</li>
      </ul>
    </div>
  );
};

export default Navbar;
