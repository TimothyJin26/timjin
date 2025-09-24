import Socials from "../common/reusable/Socials";
import { NavLink } from "react-router-dom";

const handleScrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

export default function Footer() {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center overflow-x-hidden pt-20 pb-32 space-y-4">
                <div className="w-5/6 flex flex-row items-center justify-center space-x-4">
                    <NavLink to="/" onClick={handleScrollToTop}>
                        <button className="text-[#696969] tracking-wide font-light hover:text-gray-700 text-xl">
                            timjin 
                        </button>
                    </NavLink>
                    <div className="text-[#696969]">|</div>
                    <Socials />
                </div>
                <div className="text-[#696969] text-sm">
                    © 2025 Timothy Jin
                </div>
            </div>
        </>
    );
}