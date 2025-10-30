import React from "react";
import { Project } from "../types";
import ProjectCarousel from "./common/reusable/ProjectCarousel";

const projects: Project[] = [
    {
        title: "FinHog",
        skills: [
            "TypeScript",
            "React",
            "aws",
            "Agentic",
            "Claude",
            "LLM",
        ],
        description:
            "An autonomous financial analytics agent that manages and optimizes visualizations based on real-time statistical analysis.",
        awards: [
            "1st Place HackMIT winner for Anthropic Best Use of Claude",
            "2nd Place Best Financial Analytics Agent for Warp"
        ],
        links: [
            {
                label: "Website",
                href: "https://www.finhog.net",
            },
            {
                label: "GitHub",
                href: "https://github.com/Cheggin/HackMIT2025",
            },
        ],
    },
    {
        title: "Lumo",
        skills: [
            "TypeScript",
            "aws",
            "Swift",
            "Claude",
            "LLM",
            "NoSQL",
            "iOS",
            "Xcode",
        ],
        description:
            "A social platform that connects friends through emotionally context-aware messages.",
        links: [
            {
                label: "GitHub",
                href: "https://github.com/karenzhao35/nwHacks2025/tree/main",
            },
            {
                label: "Devpost",
                href: "https://devpost.com/software/lumo-uofbck",
            },
        ],
    },
    {
        title: "Vancouver Transit",
        skills: ["Flutter", "Dart", "iOS", "Android", "Xcode"],
        description:
            "Live public transit iOS and Android app for Vancouver commuters.",
        links: [
            {
                label: "GitHub",
                href: "https://github.com/TimothyJin26/TransitApp",
            },
            { label: "Website", href: "https://jttechnologyapps.com" },
        ],
    },
    {
        title: "Balance Test",
        skills: [
            "Flutter",
            "aws",
            "React",
            "TypeScript",
            "Postgres",
            "iOS",
            "Android",
            "Xcode",
        ],
        description:
            "A platform to enhance physical rehabilitation through ML analysis of IMU data.",
        links: [
            {
                label: "GitHub",
                href: "https://github.com/UBC-CIC/balance-test-app",
            },
            {
                label: "Website",
                href: "https://cic.ubc.ca/project/application-to-assess-patients-balance-level",
            },
        ],
    },
    {
        title: "Parkinson's Survey App",
        skills: ["TypeScript", "Flutter", "aws", "iOS", "Android", "Xcode"],
        description:
            "An iOS app to aid researchers in the collection of Parkinson symptoms data.",
        links: [
            {
                label: "GitHub",
                href: "https://github.com/UBC-CIC/parkinsons-backend",
            },
            {
                label: "Website",
                href: "https://cic.ubc.ca/project/parkinsons-woq-19-survey-application",
            },
        ],
    },
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
