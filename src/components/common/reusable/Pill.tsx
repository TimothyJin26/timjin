import React from "react";

interface PillProps {
    text: string;
    small?: boolean;
}

const colorMap: Record<string, string> = {
    aws: "FF9900",
    TypeScript: "007ACC",
    Claude: "DA7756",
    LLM: "74AA9C",
    Postgres: "0044FF",
    NoSQL: "0044FF",
    Swift: "e4493a",
    Java: "f89820",
    LightGBM: "ef4927",
    React: "61dbfb",
    Python: "f3bb30",
    pytest: "c7d303",
    protobuf: "0b9d57",
    Flutter: "42d2fd",
    Dart: "1d5b9a",
    iOS: "f00008",
    Android: "3DDC84",
    Xcode: "2b69de",
    RAG: "c300ff",
    "Machine Learning": "2e81ff",
    Agentic: "02ff78",
};

const Pill: React.FC<PillProps> = ({ text, small }) => {
    const colorHex = colorMap[text] ?? "#FFFFFF";

    return (
        <div
            className={`inline-block rounded-full text-[#526370] ${
                small ? "px-3 py-2 text-xs" : "px-4 py-2 text-sm"
            }`}
            style={{
                backgroundColor: `#${colorHex}26`,
            }}
        >
            {text}
        </div>
    );
};

export default Pill;
