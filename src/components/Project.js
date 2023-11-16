import React, { useEffect } from "react";
import Card from "./Card";
import { projectsList } from "../variables/general";
import { Animate, initTE } from "tw-elements";

const Project = () => {
  useEffect(() => {
    initTE({ Animate });
  });

  return (
    <div className="my-32 flex flex-col justify-center items-center text-center gap-3">
      <h1 className="text-5xl  font-bold mb-5">Project</h1>
      <p className="font-medium">Check out some of my personal project</p>
      {displayProject()}
    </div>
  );
};

const displayProject = () => {
  return (
    <ul className="flex flex-wrap gap-5 justify-center m-2">
      {projectsList.map((list, index) => {
        return (
        
            <Card
              key={index}
              title={list.title}
              desc={list.desc}
              image={list.image}
              link={list.link}
              listTech={list.listTech}
              
            />
        );
      })}
    </ul>
  );
};

export default Project;
