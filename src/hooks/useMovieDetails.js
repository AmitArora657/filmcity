import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../services/movieApi";

export function useMovieDetails(id) {
  const {
    data: movie,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieDetails(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });

  return {
    movie,
    loading,
    error,
  };
}
