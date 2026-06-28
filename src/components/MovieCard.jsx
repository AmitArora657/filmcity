import { useNavigate } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      style={{
        cursor: "pointer",
        background: "#222",
        borderRadius: "10px",
        overflow: "hidden",
        transition: "transform 0.2s ease",
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "10px" }}>
        <h3>{movie.title}</h3>

        <p>⭐ {movie.vote_average}</p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(movie);
          }}
          style={{
            background: isFavorite(movie.id) ? "#E50914" : "#444",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          {isFavorite(movie.id) ? "❤️ Remove" : "🤍 Favorite"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
