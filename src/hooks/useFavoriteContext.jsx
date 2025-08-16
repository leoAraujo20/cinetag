import { FavoriteContext } from "@/contexts/Favorites.jsx";
import { useContext } from "react";

export default function useFavoriteContext() {
  const { favorites, setFavorites } = useContext(FavoriteContext);

  function addFavorite(newFavorite) {
    const isFavorite = favorites.some(
      (favorite) => favorite.id === newFavorite.id
    );
    if (!isFavorite) {
      return setFavorites([...favorites, newFavorite]);
    }

    return setFavorites(
      favorites.filter((favorite) => favorite.id !== newFavorite.id)
    );
  }

  return { favorites, addFavorite };
}
