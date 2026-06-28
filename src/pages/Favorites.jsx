import { useFavorites } from "../hooks/useFavorites";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <h2 style={{ color: "white", padding: "20px" }}>
        No favorite movies yet ❤️
      </h2>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#181818",
        color: "white",
        padding: "20px",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>My Favorite Movies ❤️</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "20px",
        }}
      >
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
