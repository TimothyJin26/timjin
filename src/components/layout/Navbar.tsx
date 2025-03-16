import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="fixed top-0 z-50 w-full bg-[#FFFDFA]">
            <div className="mx-10 flex items-center justify-between py-6">
                <NavLink to="/">
                    <button className="text-black tracking-wide font-light hover:text-gray-700 text-xl">
                        timjin
                    </button>
                </NavLink>
                <div className="flex font-inria text-base items-center space-x-12 mr-16 font-medium">
                    <NavLink to="/projects">
                        <button className="text-black hover:text-gray-700">
                            Projects
                        </button>
                    </NavLink>
                    <NavLink to="/gallery">
                        <button className="text-black hover:text-gray-700">
                            Gallery
                        </button>
                    </NavLink>
                    <NavLink to="/about">
                        <button className="text-black hover:text-gray-700">
                            About
                        </button>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
