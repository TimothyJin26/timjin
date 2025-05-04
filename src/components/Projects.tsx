import React from "react";
import { Project } from "../types";
import ProjectCarousel from "./common/reusable/ProjectCarousel";

const projects: Project[] = [
    {
        title: "Lumo",
        skills: ["TypeScript", "aws", "Swift", "Claude", "LLM", "NoSQL"],
        description:
            "A social platform that connects friends through emotionally context-aware messages.",
        links: [{ label: "GitHub", href: "https://github.com/yourname/lumo" }],
    },
    {
        title: "Vancouver Transit",
        skills: ["Flutter"],
        description:
            "Live public transit iOS and Android app for Vancouver commuters.",
        links: [{ label: "Website", href: "https://transit.example.com" }],
    },
    {
        title: "Balance Test",
        skills: ["Flutter", "aws", "React", "TypeScript", "Postgres"],
        description:
            "A platform to enhance physical rehabilitation through ML analysis of IMU data.",
        links: [{ label: "Website", href: "https://transit.example.com" }],
    },
    {
        title: "Parkinson's Survey App",
        skills: ["TypeScript", "Flutter", "aws"],
        description:
            "An iOS app to aid researchers in the collection of Parkinson symptoms data.",
        links: [{ label: "Website", href: "https://transit.example.com" }],
    },
    // add more projects...
];

const Projects: React.FC = () => {
    return (
        <div className="h-screen flex flex-col overflow-hidden pt-32 items-center">
            <div className="w-full px-24">
                <div className="text-4xl font-bold text-[#301000] mb-12">
                    Projects
                </div>
            </div>

            <ProjectCarousel projects={projects} />
        </div>
    );
};

export default Projects;
