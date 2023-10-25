import React from "react";
import Card from "./Card";
import { projectsList } from "../variables/general";

const Project = () => {
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
        <div className="flex flex-wrap gap-16 justify-between text-left">
            {
                projectsList.map((list, index) => {
                    return (
                        <Card 
                        key={index}
                        title={list.title}
                        desc={list.desc}
                        image={list.image}
                        link={list.link}
                        listTech={list.listTech}
                        />
                    )
                })
            }
       
        
      </div>
    )
}

export default Project;
