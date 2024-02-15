import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
  bopayment,
  bamboo,
  lagravate,
  metaverse,
  fortra
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
        <a href="https://bopayments.com" target="_blank" rel="noopener noreferrer">
        <ProjectsCard
            title="Bopayment(Bank)"
            category="Web Application"
            image={bopayment}
            
          />
        </a>
        <a href=" https://www.bamboohr.com/b1" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="Bamboo Hr"
            category="Web Application"
            image={bamboo}
          />
         </a>
          
        </div>
        <div className="px-6">
          {/* <ProjectsCard
            title="Fortra"
            category="Web Application"
            image={fortra}
          /> */}
          <a href="https://playtoearngames.com/" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="Meta Verse"
            category="Web Application"
            image={metaverse}
          />
          </a>

          <ProjectsCard
            title="Lagravate"
            category="Web Application"
            image={lagravate}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
