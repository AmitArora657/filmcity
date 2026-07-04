import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// const API_KEY = "3323f214569e4bef3a4e3c45b574a932";
console.log("test", API_KEY, import.meta.env.VITE_TMDB_API_KEY);

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
  },
});

export const getPopularMovies = async () => {
  const response = await api.get("/movie/popular");

  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await api.get("/search/movie", {
    params: {
      query,
    },
  });

  return response.data.results;
};

export const getMovieDetails = async (id) => {
  const response = await api.get(`/movie/${id}`);

  return response.data;
};

export const getSimilarMovies = async (id) => {
  const response = await api.get(`/movie/${id}/similar`);

  return response.data.results;
};

export const getMovieCredits = async (id) => {
  const response = await api.get(`/movie/${id}/credits`);

  return response.data;
};

export const getMovieVideos = async (id) => {
  const response = await api.get(`/movie/${id}/videos`);

  return response.data.results;
};
