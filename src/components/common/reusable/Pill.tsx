import React from "react";

interface PillProps {
    text: string;
}

const colorMap: Record<string, string> = {
    aws: "FF9900",
    TypeScript: "007ACC",
    Claude: "DA7756",
    LLM: "74AA9C",
    Postgres: "0044FF",
    NoSQL: "0044FF",
    Swift: "FF4400",
    Java: "f89820",
    LightGBM: "ef4927",
    React: "61dbfb",
    Python: "f3bb30",
    pytest: "c7d303",
    protobuf: "0b9d57",
    Flutter: "42d2fd",
};

const Pill: React.FC<PillProps> = ({ text }) => {
    const colorHex = colorMap[text] ?? "#FFFFFF";

    return (
        <div
            className="inline-block px-4 py-2 text-sm rounded-full text-[#526370]"
            style={{
                backgroundColor: `#${colorHex}26`, // Adds 15% opacity (hex + 26 = opacity 15%)
            }}
        >
            {text}
        </div>
    );
};

export default Pill;
