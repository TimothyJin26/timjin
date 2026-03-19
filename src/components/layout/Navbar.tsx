import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 z-50 w-full bg-[#FFFDFA]">
            <div className="mx-6 md:mx-10 flex items-center justify-between py-6">
                <NavLink to="/">
                    <button className="text-black tracking-wide font-light hover:text-gray-700 text-xl">
                        timjin
                    </button>
                </NavLink>

                {/* Desktop nav */}
                <div className="hidden md:flex font-inter text-base items-center space-x-12 mr-16 font-normal">
                    <NavLink to="/projects">
                        <button className="text-black hover:text-gray-700">Projects</button>
                    </NavLink>
                    <NavLink to="/gallery">
                        <button className="text-black hover:text-gray-700">Gallery</button>
                    </NavLink>
                    <NavLink to="/about">
                        <button className="text-black hover:text-gray-700">About</button>
                    </NavLink>
                </div>

                {/* Hamburger button */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-start px-6 pb-5 space-y-5 font-inter text-base font-normal bg-[#FFFDFA] border-t border-black/5">
                    <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
                        <button className="text-black hover:text-gray-700 pt-4">Projects</button>
                    </NavLink>
                    <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>
                        <button className="text-black hover:text-gray-700">Gallery</button>
                    </NavLink>
                    <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                        <button className="text-black hover:text-gray-700">About</button>
                    </NavLink>
                </div>
            )}
        </nav>
    );
}
