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
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { useSimilarMovies } from "../hooks/useSimilarMovies";
import MovieCard from "../components/MovieCard";
import { useMovieCredits } from "../hooks/useMovieCredits";
import { useMovieVideos } from "../hooks/useMovieVideos";
import TrailerModal from "../components/TrailerModal";
import MovieInfo from "../components/MovieInfo";
import CastList from "../components/CastList";
import SimilarMovies from "../components/SimilarMovies";
import "../styles/MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { movie, loading, error } = useMovieDetails(id);
  const { data: similarMovies = [] } = useSimilarMovies(id);
  const { data: credits } = useMovieCredits(id);
  const { data: videos = [] } = useMovieVideos(id);

  const trailer = videos.find(
    (video) => video.type === "Trailer" && video.site === "YouTube",
  );

  const [showTrailer, setShowTrailer] = useState(false);

  const director = credits?.crew?.find((person) => person.job === "Director");

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Something went wrong.</h2>;
  }

  return (
    <div className="movie-details-page">
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

        <MovieInfo
          movie={movie}
          trailer={trailer}
          onWatchTrailer={() => setShowTrailer(true)}
        />
      </div>

      <SimilarMovies movies={similarMovies} />
      <CastList cast={credits?.cast} />
      {showTrailer && (
        <TrailerModal
          trailerKey={trailer.key}
          onClose={() => setShowTrailer(false)}
        />
      )}
    </div>
  );
}

export default MovieDetails;
