import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineDribbble,
} from "react-icons/ai";
import { Tooltip } from "@material-tailwind/react";

const Footer = () => {
  const sizeIcon = 27;
  return (
    <div className="flex flex-col justify-between gap-3 items-center p-3 bg-gray-950 text-white">
      <div className="text-center ">
        <h1 className="text-4xl font-bold">Contact Me</h1>
      <p className="font-medium text-gray-500">Bayu Ferdiman - 2023 😸</p>
      </div>

      <ul className="flex gap-5 opacity-70">
        <li>
          <Tooltip
            content="bayu-ferdiman"
            animate={{
              mount: { scale: 1.2, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <a
              href="https://www.linkedin.com/in/bayu-ferdiman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineLinkedin size={sizeIcon} />
            </a>
          </Tooltip>
        </li>
        <li>
        <Tooltip
            content="@frdmn12"
            animate={{
              mount: { scale: 1.2, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
          <a
            href="https://github.com/frdmn12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub size={sizeIcon} />
          </a>
          </Tooltip>
        </li>
        <li>
        <Tooltip
            content="bayu.ferdiman@binus.ac.id"
            animate={{
              mount: { scale: 1.2, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
          <a
            href="mailto:bayu.ferdiman@binus.ac.id?subject=Work"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineMail size={sizeIcon} />
          </a>
          </Tooltip>
        </li>
        <li>
        <Tooltip
            content="@bayuferdiman"
            animate={{
              mount: { scale: 1.2, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
          <a
            href="https://dribbble.com/bayuferdiman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineDribbble size={sizeIcon} />
          </a>
          </Tooltip>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
