import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-xl">
      <div className="mx-10 flex items-center justify-between py-6">
        <NavLink to="/">
          <button className="text-gray-700 hover:text-black text-2xl">
            Projects
          </button>
        </NavLink>
        <div className="flex items-center space-x-10 mr-20 font-medium">
          <NavLink to="/projects">
            <button className="text-gray-700 hover:text-black">Projects</button>
          </NavLink>
          <NavLink to="/gallery">
            <button className="text-gray-700 hover:text-black">Gallery</button>
          </NavLink>
          <NavLink to="/about">
            <button className="text-gray-700 hover:text-black">About</button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
