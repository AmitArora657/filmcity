import { useNavigate } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";
import "../styles/MovieCard.css";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div onClick={() => navigate(`/movie/${movie.id}`)} className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        className="movie-poster"
      />

      <div style={{ padding: "10px" }}>
        <h3>{movie.title}</h3>

        <p>⭐ {movie.vote_average}</p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(movie);
          }}
          className="favorite-button"
        >
          {isFavorite(movie.id) ? "❤️ Remove" : "🤍 Favorite"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
