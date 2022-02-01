import { useState, useEffect } from 'react';
export function useFavorites() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      setFavorites(JSON.parse(favorites));
    }
  }, []);

  useEffect(() => {
    if (!favorites) return;
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  function handleFavorite(item) {
    if (favorites.find((fav) => fav.place_id === item.place_id)) {
      setFavorites(favorites.filter((fav) => fav.place_id !== item.place_id));
      return;
    }
    setFavorites([...favorites, item]);
  }

  return { favorites, setFavorites, handleFavorite };
}
