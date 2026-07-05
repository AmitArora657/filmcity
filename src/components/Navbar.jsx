import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        🎬 FilmCity
      </NavLink>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/favorites">❤️ Favorites</NavLink>

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
