import React from "react";
import { Tooltip } from "@material-tailwind/react";
import { contactsList } from "../variables/general";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between gap-3 items-center p-3 bg-gray-950 text-white">
      <div className="text-center ">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="font-medium text-gray-500">Bayu Ferdiman - 2023 😸</p>
      </div>
      {displayContacts()}
    </div>
  );
};

const displayContacts = () => {
  return (
    <ul className="flex gap-5 opacity-70">
      {contactsList.map((contact, index) => {
        return (
          <li>
            <Tooltip
              content={contact.content}
              animate={{
                mount: { scale: 1.2, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                {contact.icon}
              </a>
            </Tooltip>
          </li>
        );
      })}
    </ul>
  );
};

export default Footer;
