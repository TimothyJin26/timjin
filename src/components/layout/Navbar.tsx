import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-xl">
      <div className="mx-10 flex items-center justify-between py-4">
        <div>PLACE LOGO HERE</div>
        <div className="flex items-center space-x-2">
          <NavLink key={0} to="/">
            <button>Projects</button>
          </NavLink>
          <NavLink key={1} to="/default">
            <button>Gallery</button>
          </NavLink>
          <NavLink key={2} to="/">
            <button>About</button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
