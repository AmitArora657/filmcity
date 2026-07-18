import { useEffect, useState } from "react";
import { useMovies } from "../hooks/useMovies";
import { searchMovies } from "../services/movieApi";
import MovieCard from "../components/MovieCard";
import { useSearchMovies } from "../hooks/useSearchMovies";
import { useDebounce } from "../hooks/useDebounce";
import "../styles/Home.css";
import {
  getPopularMovies,
  getTrendingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../services/movieApi";

import { useMovieCategory } from "../hooks/useMovieCategory";
import MovieSection from "../components/MovieSection";
import CategoryNav from "../components/CategoryNav";

function Home() {
  // const { movies, loading } = useMovies();
  // const { movies, loading, error } = useMovies();
  const {
    movies: popularMovies,
    loading: popularLoading,
    error: popularError,
  } = useMovieCategory("popular", getPopularMovies);

  const {
    movies: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useMovieCategory("trending", getTrendingMovies);

  const {
    movies: topRatedMovies,
    loading: topRatedLoading,
    error: topRatedError,
  } = useMovieCategory("topRated", getTopRatedMovies);

  const {
    movies: upcomingMovies,
    loading: upcomingLoading,
    error: upcomingError,
  } = useMovieCategory("upcoming", getUpcomingMovies);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  // const [searchResults, setSearchResults] = useState([]);
  const { movies: searchResults, loading: searchLoading } =
    useSearchMovies(debouncedSearch);

  // useEffect(() => {
  //   if (!search.trim()) {
  //     setSearchResults([]);
  //     return;
  //   }

  //   const timeout = setTimeout(() => {
  //     searchMovies(search)
  //       .then((data) => {
  //         setSearchResults(data);
  //       })
  //       .catch(console.error);
  //   }, 500);

  //   return () => clearTimeout(timeout);
  // }, [search]);

  if (popularLoading || trendingLoading || topRatedLoading || upcomingLoading) {
    return <h2>Loading...</h2>;
  }

  if (popularError || trendingError || topRatedError || upcomingError) {
    return <h2>Something went wrong.</h2>;
  }
  if (popularError || trendingError || topRatedError || upcomingError) {
    return <h2>Something went wrong.</h2>;
  }

  //const displayedMovies = search.trim() ? searchResults : movies;
  // const displayedMovies = debouncedSearch.trim() ? searchResults : movies;

  return (
    <div className="home-page">
      {/* <header
        style={{
          background: "#111",
          padding: "20px 30px",
          fontSize: "30px",
          fontWeight: "bold",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        }}
      >
        🎬 SilverScreen
      </header> */}

      <div style={{ padding: "20px" }}>
        {/* <h1>Movies</h1> */}
        <h1>Discover Movies</h1>

        <CategoryNav
          sections={[
            { id: "trending", title: "🔥 Trending" },
            { id: "top-rated", title: "⭐ Top Rated" },
            { id: "popular", title: "🎬 Popular" },
            { id: "upcoming", title: "📅 Upcoming" },
          ]}
        />

        <div className="search-container">
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            // style={{
            //   width: "100%",
            //   maxWidth: "500px",
            //   padding: "12px 16px",
            //   borderRadius: "8px",
            //   border: "none",
            //   fontSize: "16px",
            //   marginBottom: "20px",
            // }}
            className="search-input"
          />
        </div>
        {searchLoading && <p className="search-loading">Searching...</p>}

        {/* <div className="movies-grid">
          {displayedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div> */}
        {debouncedSearch.trim() ? (
          <>
            <h2>Search Results</h2>

            <div className="movies-grid">
              {searchResults.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </>
        ) : (
          <>
            <MovieSection
              id="trending"
              title="🔥 Trending"
              movies={trendingMovies}
              loading={trendingLoading}
              error={trendingError}
            />

            <MovieSection
              id="top-rated"
              title="⭐ Top Rated"
              movies={topRatedMovies}
              loading={topRatedLoading}
              error={topRatedError}
            />

            <MovieSection
              id="popular"
              title="🎬 Popular"
              movies={popularMovies}
              loading={popularLoading}
              error={popularError}
            />

            <MovieSection
              id="upcoming"
              title="📅 Upcoming"
              movies={upcomingMovies}
              loading={upcomingLoading}
              error={upcomingError}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
