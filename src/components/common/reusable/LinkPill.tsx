import React from "react";
import balanceTest from "../../../assets/link.svg";

interface PillProps {
    text: string;
    link: string;
}

const Pill: React.FC<PillProps> = ({ text, link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full text-black bg-white px-3 py-2 text-xs hover:bg-gray-100 transition-colors"
        >
            {text}
            <img src={balanceTest} className="w-2 h-2" />
        </a>
    );
};

export default Pill;
