import { useState } from "react";

export default function Timeline() {
    const timelinePoints = [
        {
            id: 1,
            label: "Amazon",
            role: "Software Development Engineer Intern",
            date: "May 2025 - Present | Vancouver BC",
            details:
                "Building digital accelration tools for Amazon Entertainment products and services.\n\nMore to come...",
        },
        {
            id: 2,
            label: "Stanford Emergency Medicine",
            role: "Student Researcher",
            date: "May 2024 - Present | Palo Alto - Remote",
            details:
                "Developing and benchmarking ML models used to analyze live ED-data.\nBuilding and maintaining AWS infrastructure used to transport, analyze, and feed data to our frontend dashboard.\nExpanding our UI to support new metrics and analytics on live patient data.",
        },
        {
            id: 3,
            label: "Rivian",
            role: "Software Engineer Intern",
            date: "May 2024 - Dec 2024 | Vancouver BC",
            details:
                "Created various tools to aid and accelrate the integration of mobile app features.\nThese tools include a Python based vehicle simulator,  a Google Protocol Buffer message publishing framework, and a React, Typescript, and AWS based vehicle simulator dashboard.\nDuring my time here, I also lead the integration of various mobile app features including the 2024 Halloween feature, overseeing development and testing.",
        },
        {
            id: 4,
            label: "UBC Cloud Innovation Centre",
            role: "Software Developer Co-op",
            date: "Jan 2023 - Aug 2023 | Vancouver BC",
            details:
                "Developed cloud-based healthcare projects to help physical rehabilitation and Parkinson's patients, researchers, and doctors.\nBuilt multiple Flutter apps to collect data to feed to our AWS supported backends for ML analysis, data processing, and storage.\nDesigned and developed multiple accessible mobile apps to display analytics and metrics for patients and doctors.",
        },
    ];

    const [selectedPoint, setSelectedPoint] = useState(timelinePoints[0]);

    return (
        <div className="flex w-full mx-auto relative">
            {/* Timeline Section */}
            <div className="w-[40%] relative flex items-center">
                {/* Vertical Line */}
                <div className="absolute left-[75%] top-0 bottom-10 border-l-4 border-[#301000]" />

                {/* Timeline Points */}
                <div className="flex flex-col justify-between relative w-full py-8 min-h-[400px]">
                    {timelinePoints.map((point) => {
                        const isSelected = selectedPoint.id === point.id;
                        return (
                            <div
                                key={point.id}
                                className="flex items-center cursor-pointer w-full group"
                                onClick={() => setSelectedPoint(point)}
                            >
                                {/* Label */}
                                <div
                                    className={`text-xl font-medium text-right w-[75.4%] pr-6 transition-colors duration-200 ease-in-out
                    ${
                        isSelected
                            ? "text-[#3b1401]"
                            : "text-black group-hover:text-[#301000]"
                    }`}
                                >
                                    {point.label}
                                </div>

                                {/* Point */}
                                <div
                                    className={`
                    w-6 h-6 rounded-full transition-all duration-200 ease-in-out
                    ${
                        isSelected
                            ? "bg-[#3b1401] border-4 border-[#FFFDFA]"
                            : "bg-[#FFFDFA] border-4 border-[#301000] group-hover:bg-[#301000] group-hover:border-[#FFFDFA]"
                    }
                `}
                                    style={{ marginLeft: "-12px" }}
                                ></div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Details Panel */}
            <div
                key={selectedPoint.id}
                className="w-[60%] p-8 bg-[#FFFDFA] border-l-4 border-[#301000] shadow-lg rounded-lg overflow-y-auto key={selectedPoint.id} animate-fade-in"
            >
                <h2 className="text-2xl text-[#301000] font-bold mb-1">
                    {selectedPoint.role}
                </h2>
                <div className="mb-4 text-[#526370]">{selectedPoint.date}</div>
                <p className="text-lg text-black whitespace-pre-line">
                    {selectedPoint.details}
                </p>
            </div>
        </div>
    );
}
