import MovieCard from "./MovieCard";
import "../styles/SimilarMovies.css";

function SimilarMovies({ movies = [] }) {
  return (
    <>
      <h2 className="similar-movies-heading">Similar Movies</h2>

      <div className="similar-movies-container">
        {movies.slice(0, 6).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default SimilarMovies;
