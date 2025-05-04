import React from "react";
import { Project } from "../types";
import ProjectCarousel from "./common/reusable/ProjectCarousel";

const projects: Project[] = [
  {
    title: "Lumo",
    skills: ["React", "AWS", "Machine Learning"],
    description: "A platform to match donors with disaster relief charities in real-time.",
    links: [{ label: "GitHub", href: "https://github.com/yourname/lumo" }],
  },
  {
    title: "Transit",
    skills: ["Node.js", "Express", "MongoDB"],
    description: "Live public transit route predictor for urban commuters.",
    links: [{ label: "Website", href: "https://transit.example.com" }],
  },
  {
    title: "Transit",
    skills: ["Node.js", "Express", "MongoDB"],
    description: "Live public transit route predictor for urban commuters.",
    links: [{ label: "Website", href: "https://transit.example.com" }],
  },
  // add more projects...
];

const Projects: React.FC = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden pt-32 items-center">
      <div className="w-full px-24">
        <div className="text-4xl font-bold text-[#301000] mb-12">Projects</div>
      </div>

      <ProjectCarousel projects={projects} />
    </div>
  );
};

export default Projects;
