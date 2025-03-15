import React from "react";

interface PillProps {
    text: string;
    colorHex: string;
}

const Pill: React.FC<PillProps> = ({ text, colorHex }) => {
    return (
        <div
            className="inline-block px-6 py-3 text-lg rounded-full text-[#526370]"
            style={{
                backgroundColor: `${colorHex}26`, // Adds 15% opacity (hex + 26 = opacity 15%)
            }}
        >
            {text}
        </div>
    );
};

export default Pill;
