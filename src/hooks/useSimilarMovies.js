import { useQuery } from "@tanstack/react-query";
import { getSimilarMovies } from "../services/movieApi";

export function useSimilarMovies(id) {
  return useQuery({
    queryKey: ["similarMovies", id],
    queryFn: () => getSimilarMovies(id),
  });
}
