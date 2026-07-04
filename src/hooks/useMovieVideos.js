import { useQuery } from "@tanstack/react-query";
import { getMovieVideos } from "../services/movieApi";

export function useMovieVideos(id) {
  return useQuery({
    queryKey: ["movieVideos", id],
    queryFn: () => getMovieVideos(id),
    enabled: !!id,
  });
}
