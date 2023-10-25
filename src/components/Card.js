import React from "react";
import { AiOutlineExport } from "react-icons/ai";

const Card = ({ image, title, desc, listTech, link }) => {
  return (
    <div className="relative flex flex-col justify-between  text-gray-700 bg-white shadow-lg w-96 rounded-xl bg-clip-border">
      <div class="p-6">
        <div className="mb-4 bg-blue-gray-500 shadow-lg rounded-xl">
          <img
            src={image}
            alt="image_project"
            layout="fill"
            className="rounded-xl object-cover w-full h-60 hover:opacity-50"
          />
        </div>
        <a href={link} target="blank" className="cursor-pointer flex items-center underline hover:text-blue-400">
          <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 ">
            {title}
          </h5>
          <AiOutlineExport className="m-1" size={15}/>
        </a>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          {desc}
        </p>
      </div>
      <div class="p-6 pt-0">
        <ul className="flex flex-wrap gap-3">
          {listTech.map((element) => {
            return (
              <li className="text-gray-700 bg-gray-100 p-1 rounded-lg text-sm">
                {element}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;