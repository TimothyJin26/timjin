import { useState } from "react";
import Pill from "./common/reusable/Pill";
import notionData from "../data/notion.json";

export default function Timeline() {

    const timelinePoints = notionData.map((item) => {
        const properties = item.properties || {};

        return {
            id: properties.Id?.number ?? item.id,
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

    const detailContent = (extraClass = "") => (
        <div
            key={selectedPoint.id}
            className={`py-6 px-6 md:py-8 md:px-12 bg-[#FFFEFC] border-l-4 border-[#301000] rounded-lg overflow-y-auto animate-fade-in ${extraClass}`}
            style={{
                boxShadow: `
                  0 5px 10px -3px rgba(0, 0, 0, 0.1),
                  0 2px 6px -10px rgba(0, 0, 0, 0.1)
                `,
            }}
        >
            <h2 className="text-xl md:text-2xl text-[#301000] font-bold mb-1">
                {selectedPoint.role}
            </h2>
            <div className="mb-4 text-[#526370]">{selectedPoint.date}</div>
            <div className="flex flex-wrap gap-2 mb-5">
                {selectedPoint.skills.map((skill) => (
                    <Pill key={skill} text={skill} />
                ))}
            </div>
            <p className="text-base text-black leading-7 whitespace-pre-line">
                {selectedPoint.details}
            </p>
        </div>
    );

    return (
        <>
            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col gap-4">
                <div className="flex overflow-x-auto gap-2 no-scrollbar pb-1">
                    {timelinePoints.map((point) => {
                        const isSelected = selectedPoint.id === point.id;
                        return (
                            <button
                                key={point.id}
                                onClick={() => setSelectedPoint(point)}
                                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-colors duration-200 ${
                                    isSelected
                                        ? "bg-[#301000] text-white border-[#301000]"
                                        : "text-[#301000] border-[#301000]/30 hover:border-[#301000]"
                                }`}
                            >
                                {point.label}
                            </button>
                        );
                    })}
                </div>
                {detailContent()}
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex w-full mx-auto relative">
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
                {detailContent("w-[60%]")}
            </div>
        </>
    );
}
