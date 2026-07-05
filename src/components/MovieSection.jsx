import MovieCard from "./MovieCard";
import "../styles/MovieSection.css";

function MovieSection({ title, movies, loading, error }) {
  if (loading) {
    return <p>Loading {title}...</p>;
  }

  if (error) {
    return <p>Failed to load {title}.</p>;
  }

  return (
    <section className="movie-section">
      <h2>{title}</h2>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default MovieSection;
