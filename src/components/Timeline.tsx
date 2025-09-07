import { useState } from "react";
import Pill from "./common/reusable/Pill";
import notionData from "../data/notion.json";

export default function Timeline() {

    const timelinePoints = notionData.map((item) => {
        const properties = item.properties || {};

        return {
            id: properties.Id?.number ?? item.id, // Use custom Id, fallback to Notion UUID
            label: properties.Company?.title?.[0]?.plain_text || "Unknown Company",
            role: properties.Role?.rich_text?.[0]?.plain_text || "Unknown Role",
            date:
                (properties.Dates?.rich_text?.[0]?.plain_text || "Unknown Dates") +
                " | " +
                (properties.Location?.rich_text?.[0]?.plain_text || "Unknown Location"),
            skills: (properties.Skills?.multi_select || []).map((skill) => skill.name),
            details:
                properties.Description?.rich_text
                    ?.map((desc) => desc.plain_text)
                    .join("\n") || "No description",
        };
    }).sort((a, b) => b.id - a.id);


    const [selectedPoint, setSelectedPoint] = useState(timelinePoints[0]);

    return (
        <div className="flex w-full mx-auto relative">
            {/* Timeline Section */}
            <div className="w-[40%] relative flex items-center mt-6">
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
                className="w-[60%] py-8 px-12 bg-[#FFFEFC] border-l-4 border-[#301000] rounded-lg overflow-y-auto key={selectedPoint.id} animate-fade-in"
                style={{
                    boxShadow: `
                      0 5px 10px -3px rgba(0, 0, 0, 0.1),
                      0 2px 6px -10px rgba(0, 0, 0, 0.1)
                    `,
                }}
            >
                <h2 className="text-2xl text-[#301000] font-bold mb-1">
                    {selectedPoint.role}
                </h2>
                <div className="mb-4 text-[#526370]">{selectedPoint.date}</div>
                <div className="space-x-2 mb-5">
                    {selectedPoint.skills.map((skill) => (
                        <Pill key={skill} text={skill} />
                    ))}
                </div>
                <p className="text-base text-black leading-7 whitespace-pre-line">
                    {selectedPoint.details}
                </p>
            </div>
        </div>
    );
}
