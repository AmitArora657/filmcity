import "../styles/MovieInfo.css";

function MovieInfo({ movie, trailer, onWatchTrailer }) {
  return (
    <div className="movie-info">
      <h1>{movie.title}</h1>

      <h3 className="movie-tagline">{movie.tagline}</h3>

      <p>
        <strong>Rating:</strong> ⭐ {movie.vote_average.toFixed(1)} / 10
      </p>

      {trailer && (
        <button className="watch-trailer-btn" onClick={onWatchTrailer}>
          ▶ Watch Trailer
        </button>
      )}

      <p>
        <strong>Release Date:</strong> {movie.release_date}
      </p>

      <p>
        <strong>Runtime:</strong> {movie.runtime} min
      </p>

      <p>
        <strong>Genres:</strong> {movie.genres.map((g) => g.name).join(", ")}
      </p>

      <p>
        <strong>Votes:</strong> {movie.vote_count}
      </p>

      <h3>Overview</h3>

      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieInfo;
