import { useEffect, useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");

    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movie) => {
    const exists = favorites.some((fav) => fav.id === movie.id);

    if (exists) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const isFavorite = (id) => {
    return favorites.some((movie) => movie.id === id);
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
}
