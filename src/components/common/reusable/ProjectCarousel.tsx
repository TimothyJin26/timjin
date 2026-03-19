import React, { useRef } from "react";
import { Project } from "../../../types";
import transitIcon from "../../../assets/bus.svg";
import lightIcon from "../../../assets/lightbulb.svg";
import balanceTest from "../../../assets/balance-test.svg";
import checkbox from "../../../assets/checkbox.svg";
import lumo from "../../../assets/lumo.png";
import transit from "../../../assets//transit.png";
import balanceHero from "../../../assets/balance-test-hero.png";
import parkinsonsHero from "../../../assets/parkinsons-hero.png";
import Pill from "./Pill";
import LinkPill from "./LinkPill";
import chart from "../../../assets/chart.svg"
import finHog from "../../../assets/finhog-hero.png"

const iconMap: Record<string, string> = {
    Lumo: lightIcon,
    "Vancouver Transit": transitIcon,
    "Balance Test": balanceTest,
    "Parkinson's Survey App": checkbox,
    "FinHog": chart,
};

const imageMap: Record<string, string> = {
    Lumo: lumo,
    "Vancouver Transit": transit,
    "Balance Test": balanceHero,
    "Parkinson's Survey App": parkinsonsHero,
    "FinHog": finHog,
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
                    className="flex overflow-x-auto snap-x snap-mandatory space-x-4 md:space-x-8 px-6 md:px-24 cursor-grab no-scrollbar"
                    style={{ scrollSnapType: "x mandatory" }}
                >
                    {projects.map((proj, idx) => (
                        <div
                            key={idx}
                            ref={(el) => (cardRefs.current[idx] = el)}
                            className="w-[88%] md:w-[65%] bg-[#F6F6F2] rounded-xl shadow-sm flex-shrink-0 snap-center flex flex-col self-start md:self-auto md:flex-row items-center"
                        >
                            {/* Image */}
                            <div className="flex justify-center items-center px-4 pt-4 pb-2 md:p-0 md:m-6 w-full md:w-3/4">
                                <img
                                    src={imageMap[proj.title]}
                                    alt={proj.title}
                                    className="object-contain rounded-xl max-h-44 md:max-h-none w-full"
                                />
                            </div>

                            {/* Text content */}
                            <div className="flex flex-col justify-start gap-3 md:justify-between md:gap-0 w-full md:h-full md:w-1/4 px-4 pb-6 md:py-10 md:px-0 md:mr-8">
                                <div>
                                    <h2 className="text-lg font-bold mb-2 text-black">
                                        {proj.title}
                                    </h2>
                                    <p className="text-[#526370] text-sm mb-4">
                                        {proj.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-2 transform scale-90 origin-top-left">
                                        {proj.skills.map((skill) => (
                                            <Pill
                                                key={skill}
                                                text={skill}
                                                small={true}
                                            />
                                        ))}
                                    </div>
                                    {proj.awards && proj.awards.length > 0 && (
                                        <div className="mb-4">
                                            <h3 className="text-sm font-semibold text-black mb-2">
                                                Awards
                                            </h3>
                                            <ul className="text-[#526370] text-xs space-y-1">
                                                {proj.awards.map((award, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="mr-2">🏆</span>
                                                        <span>{award}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                <div className="flex gap-2 flex-wrap">
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
