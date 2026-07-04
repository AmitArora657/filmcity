import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#111",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link
        to="/"
        style={{
          color: "#E50914",
          fontSize: "28px",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        SilverScreen
      </Link>

      <Link
        to="/favorites"
        style={{
          color: "white",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        ❤️ Favorites
      </Link>
    </nav>
  );
}

export default Navbar;
