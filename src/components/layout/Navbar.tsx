import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="fixed top-0 z-50 w-full bg-[#FFFDFA]">
            <div className="mx-10 flex items-center justify-between py-8">
                <NavLink to="/">
                    <button className="text-gray-700 hover:text-black text-2xl">
                        timjin
                    </button>
                </NavLink>
                <div className="flex font-inria text-lg items-center space-x-16 mr-16 font-medium">
                    <NavLink to="/projects">
                        <button className="text-gray-700 hover:text-black">
                            Projects
                        </button>
                    </NavLink>
                    <NavLink to="/gallery">
                        <button className="text-gray-700 hover:text-black">
                            Gallery
                        </button>
                    </NavLink>
                    <NavLink to="/about">
                        <button className="text-gray-700 hover:text-black">
                            About
                        </button>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
