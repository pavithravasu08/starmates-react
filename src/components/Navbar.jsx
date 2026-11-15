//Navbar contains links to both pages and displays the number of favourite students

import { Link, useLocation } from "react-router-dom";
import { useStudents } from "../context/StudentContext";

function Navbar() {
  const { favourites } = useStudents();
  const location = useLocation();

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <span className="logo-icon">✦</span> StarMates
      </Link>

      <nav className="nav-links">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Students
        </Link>

        <Link
          to="/favourites"
          className={
            location.pathname === "/favourites" ? "active" : ""
          }
        >
          Favourites <span className="count">{favourites.length}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
