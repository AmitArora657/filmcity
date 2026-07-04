function MovieInfo({ movie, trailer, onWatchTrailer }) {
  return (
    <div>
      <h1>{movie.title}</h1>

      <h3 style={{ color: "#aaa" }}>{movie.tagline}</h3>

      <p>
        <strong>Rating:</strong> ⭐ {movie.vote_average.toFixed(1)} / 10
      </p>

      {trailer && (
        <button
          onClick={onWatchTrailer}
          style={{
            background: "#E50914",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            margin: "15px 0",
          }}
        >
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
