import { useQuery } from "@tanstack/react-query";

export function useMovieCategory(queryKey, queryFn) {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: [queryKey],
    queryFn,
  });

  return {
    movies: data,
    loading: isLoading,
    error,
  };
}
