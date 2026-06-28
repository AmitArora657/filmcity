import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "../services/movieApi";

export function useSearchMovies(query) {
  const {
    data: movies = [],
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["search", query],
    queryFn: () => searchMovies(query),
    enabled: !!query.trim(),
    staleTime: 5 * 60 * 1000,
  });

  return {
    movies,
    loading,
    error,
  };
}
