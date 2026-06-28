// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// function MovieDetails() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     axios
//       .get(
//         `https://api.themoviedb.org/3/movie/${id}?api_key=3323f214569e4bef3a4e3c45b574a932`,
//       )
//       .then((res) => setMovie(res.data));
//   }, [id]);

//   if (!movie) return <h2>Loading...</h2>;

//   return (
//     <div>
//       <h1>{movie.title}</h1>
//       <p>{movie.overview}</p>
//     </div>
//   );
// }

// export default MovieDetails;

import { useNavigate, useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { useSimilarMovies } from "../hooks/useSimilarMovies";
import MovieCard from "../components/MovieCard";
import { useMovieCredits } from "../hooks/useMovieCredits";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { movie, loading, error } = useMovieDetails(id);
  const { data: similarMovies = [] } = useSimilarMovies(id);
  const { data: credits } = useMovieCredits(id);

  const director = credits?.crew?.find((person) => person.job === "Director");

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Something went wrong.</h2>;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#181818",
        color: "white",
        padding: "30px",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          background: "#E50914",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "30px",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        ← Back
      </button>
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "flex-start",
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{
            width: "300px",
            borderRadius: "10px",
            flexShrink: 0,
          }}
        />

        <div
          style={{
            flex: 1,
          }}
        >
          <h1>{movie.title}</h1>

          <h3 style={{ color: "#aaa" }}>{movie.tagline}</h3>

          <p>
            <strong>Rating:</strong> ⭐ {movie.vote_average.toFixed(1)} / 10
          </p>

          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>

          <p>
            <strong>Runtime:</strong> {movie.runtime} min
          </p>

          <p>
            <strong>Genres:</strong>{" "}
            {movie.genres.map((g) => g.name).join(", ")}
          </p>

          <p>
            <strong>Votes:</strong> {movie.vote_count}
          </p>

          <h3>Overview</h3>

          <p>{movie.overview}</p>
        </div>
      </div>

      <h2
        style={{
          marginTop: "50px",
          marginBottom: "20px",
        }}
      >
        Similar Movies
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "20px",
        }}
      >
        {similarMovies.slice(0, 6).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <h2 style={{ marginTop: "50px" }}>Cast</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          padding: "20px 0",
        }}
      >
        {credits?.cast?.slice(0, 10).map((actor) => (
          <div
            key={actor.id}
            style={{
              minWidth: "120px",
              textAlign: "center",
            }}
          >
            {actor.profile_path && (
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                    : "https://via.placeholder.com/120x180"
                }
                alt={actor.name}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                }}
              />
            )}
            <p
              style={{
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              {actor.name}
            </p>
            <small
              style={{
                color: "#aaa",
              }}
            >
              {actor.character}
            </small>
            <p>
              <strong>Director:</strong> {director?.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieDetails;
