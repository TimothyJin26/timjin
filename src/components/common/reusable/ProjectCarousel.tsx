import React, { useRef } from "react";
import { Project } from "../../../types";
import transitIcon from "../../../assets/bus-simple-solid.svg";
import lumo from "../../../assets/lumo.png";
import Pill from "./Pill";

const iconMap: Record<string, string> = {
    Lumo: transitIcon,
    "Vancouver Transit": transitIcon,
    "Balance Test": transitIcon,
    "Parkinson's Survey App": transitIcon,
};

interface Props {
    projects: Project[];
}

const ProjectCarousel: React.FC<Props> = ({ projects }) => {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const scrollToCard = (index: number) => {
        const card = cardRefs.current[index];
        card?.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
        });
    };

    return (
        <>
            <div className="relative w-full">
                <div
                    className="flex overflow-x-auto snap-x snap-mandatory space-x-8 px-24 cursor-grab no-scrollbar"
                    style={{ scrollSnapType: "x mandatory" }}
                >
                    {projects.map((proj, idx) => (
                        <div
                            key={idx}
                            ref={(el) => (cardRefs.current[idx] = el)}
                            className="w-[65%] h-[58vh] bg-[#F6F6F2] rounded-xl shadow-sm flex-shrink-0 snap-center flex items-center"
                        >
                            {/* Image on the left */}
                            <div className="flex justify-center items-center m-8">
                                <img
                                    src={lumo} // or proj.icon if you include it directly in your data
                                    alt={proj.title}
                                    className="object-contain"
                                />
                            </div>

                            {/* Text content */}
                            <div className="flex flex-col justify-between h-full w-2/6 py-12 mr-8">
                                <div>
                                    <h2 className="text-3xl font-bold mb-4">
                                        {proj.title}
                                    </h2>
                                    <p className="text-gray-700 mb-4">
                                        {proj.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {proj.skills.map((skill) => (
                                            <Pill key={skill} text={skill} />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    {proj.links.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-6 mt-6 justify-center">
                {projects.map((proj, idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollToCard(idx)}
                        className="px-2 py-2 rounded-full bg-[#f8f8f6] hover:bg-[#F6F6F2] text-gray-800 font-medium"
                    >
                        <img
                            src={iconMap[proj.title]}
                            alt={proj.title}
                            className="w-4 h-4"
                        />
                    </button>
                ))}
            </div>
        </>
    );
};

export default ProjectCarousel;
