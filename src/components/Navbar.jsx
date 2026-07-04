import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        SilverScreen
      </Link>

      <Link to="/favorites" className="favorites-link">
        ❤️ Favorites
      </Link>
    </nav>
  );
}

export default Navbar;
