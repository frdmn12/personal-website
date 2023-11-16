import React from "react";
import { skills } from "../variables/general";

const Skill = () => {
  return (
    <div className="my-20 flex flex-col justify-center items-center gap-5 p-3 text-center">
      <h1 className="text-5xl font-bold">Skill</h1>
      <p className="font-medium">
        Here are a few technologies I’ve been working with recently
      </p>
      {displaySkillsBadge()}
    </div>
  );
};

const displaySkillsBadge = () => {
  return (
    <ul className="flex gap-3 flex-wrap items-center justify-center sm:px-16">
      {skills.map((list, index) => {
        return (
          <li
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation="[zoom-in_1s_ease-in-out]"
          >
            <img src={list.img_link} alt={list.badge_title} />
          </li>
        );
      })}
    </ul>
  );
};

export default Skill;
