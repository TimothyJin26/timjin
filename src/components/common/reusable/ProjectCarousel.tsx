import React, { useRef } from "react";
import { Project } from "../../../types";
import transitIcon from "../../../assets/bus.svg";
import lightIcon from "../../../assets/lightbulb.svg";
import balanceTest from "../../../assets/balance-test.svg";
import checkbox from "../../../assets/checkbox.svg";
import lumo from "../../../assets/lumo.png";
import transit from "../../../assets//transit.png";
import Pill from "./Pill";
import LinkPill from "./LinkPill";

const iconMap: Record<string, string> = {
    Lumo: lightIcon,
    "Vancouver Transit": transitIcon,
    "Balance Test": balanceTest,
    "Parkinson's Survey App": checkbox,
};

const imageMap: Record<string, string> = {
    Lumo: lumo,
    "Vancouver Transit": transit,
    "Balance Test": lumo,
    "Parkinson's Survey App": lumo,
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
                            className="w-[65%] bg-[#F6F6F2] rounded-xl shadow-sm flex-shrink-0 snap-center flex items-center"
                        >
                            {/* Image on the left */}
                            <div className="flex justify-center items-center m-6 w-3/4">
                                <img
                                    src={imageMap[proj.title]}
                                    alt={proj.title}
                                    className="object-contain rounded-xl"
                                />
                            </div>

                            {/* Text content */}
                            <div className="flex flex-col justify-between h-full w-1/4 py-10 mr-8">
                                <div>
                                    <h2 className="text-lg font-bold mb-2">
                                        {proj.title}
                                    </h2>
                                    <p className="text-[#526370] text-sm mb-4">
                                        {proj.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-5 transform scale-90 origin-top-left">
                                        {proj.skills.map((skill) => (
                                            <Pill
                                                key={skill}
                                                text={skill}
                                                small={true}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    {proj.links.map((link, i) => (
                                        <LinkPill
                                            key={i}
                                            text={link.label}
                                            link={link.href}
                                        ></LinkPill>
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
                        className="px-2 py-2 rounded-full bg-[#f8f8f6] hover:bg-[#F6F6F2]"
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
