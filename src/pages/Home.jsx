import { useEffect, useState } from "react";
import { useMovies } from "../hooks/useMovies";
import { searchMovies } from "../services/movieApi";
import MovieCard from "../components/MovieCard";
import { useSearchMovies } from "../hooks/useSearchMovies";
import { useDebounce } from "../hooks/useDebounce";
import "../styles/Home.css";

function Home() {
  // const { movies, loading } = useMovies();
  const { movies, loading, error } = useMovies();
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

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Something went wrong.</h2>;
  }

  //const displayedMovies = search.trim() ? searchResults : movies;
  const displayedMovies = debouncedSearch.trim() ? searchResults : movies;

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
        <h1>Movies</h1>

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

        <div className="movies-grid">
          {displayedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
