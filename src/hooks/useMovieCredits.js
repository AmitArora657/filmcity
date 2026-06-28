import { useQuery } from "@tanstack/react-query";
import { getMovieCredits } from "../services/movieApi";

export function useMovieCredits(id) {
  return useQuery({
    queryKey: ["credits", id],
    queryFn: () => getMovieCredits(id),
  });
}
