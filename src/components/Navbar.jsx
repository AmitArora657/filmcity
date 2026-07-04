import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        🎬 FilmCity
      </Link>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/favorites">❤️ Favorites</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
