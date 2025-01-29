import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function LearnMoreHint() {
    const [isVisible, setIsVisible] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
            setTimeout(() => setFadeIn(true), 50);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        const handleScroll = () => {
            setFadeIn(false);
            setTimeout(() => setIsVisible(false), 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 text-[#526370] flex flex-col items-center transition-opacity duration-500 ${
                fadeIn ? "opacity-100" : "opacity-0"
            }`}
        >
            <span>Learn more about me</span>
            <span className="pt-2 animate-bounce">
                <FontAwesomeIcon icon={faAngleDown} />
            </span>
        </div>
    );
}
