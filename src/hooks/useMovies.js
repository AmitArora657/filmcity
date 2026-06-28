// import { useEffect, useState } from "react";
// import { getPopularMovies } from "../services/movieApi";

// export function useMovies() {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getPopularMovies()
//       .then((data) => {
//         setMovies(data);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   return { movies, loading };
// }

import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../services/movieApi";

export function useMovies() {
  const {
    data: movies = [],
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: getPopularMovies,
    staleTime: 5 * 60 * 1000,
  });

  return {
    movies,
    loading,
    error,
  };
}
