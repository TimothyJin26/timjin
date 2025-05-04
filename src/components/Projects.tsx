import React, { useRef } from "react";

const projectNames = ["Lumo", "Transit", "Balance Test", "Parkinsons", "This Website"];

const Projects: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const scrollToCard = (index: number) => {
        const card = cardRefs.current[index];
        card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    };

    return (
        <div className="h-screen flex flex-col overflow-hidden pt-32 items-center">
            {/* Title container */}
            <div className="w-full px-24">
                <div className="text-4xl font-bold text-[#301000] mb-12">
                    Projects
                </div>
            </div>

            {/* Scrollable projects */}
            <div className="relative w-full">
                <div
                    className="flex overflow-x-auto snap-x snap-mandatory space-x-8 px-24 pb-10 cursor-grab no-scrollbar"
                    style={{ scrollSnapType: "x mandatory" }}
                >
                    {projectNames.map((name, idx) => (
                        <div
                            key={idx}
                            ref={el => cardRefs.current[idx] = el}
                            className="min-w-[900px] h-[600px] bg-orange-200 rounded-xl flex-shrink-0 snap-center shadow-lg flex items-center justify-center text-2xl font-semibold"
                        >
                            {name}
                        </div>
                    ))}
                </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-6 mt-6">
                {projectNames.map((name, idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollToCard(idx)}
                        className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium"
                    >
                        {name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Projects;
