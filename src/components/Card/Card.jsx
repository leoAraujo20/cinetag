import styles from "./Card.module.css";
import favoriteIcon from "@/assets/icons/favorite.png";
import favoriteOutlineIcon from "@/assets/icons/favorite_outline.png";
import useFavoriteContext from "@/hooks/useFavoriteContext";
import { Link } from "react-router";

function Card({ id, title, coverImage }) {
  const { favorites, addFavorite } = useFavoriteContext();
  const isFavorite = favorites.some((favorite) => favorite.id === id);
  const icon = isFavorite ? favoriteIcon : favoriteOutlineIcon;

  return (
    <div className={styles.card}>
      <Link to={`/player/${id}`} className={styles.link}>
        <img src={coverImage} alt={title} className={styles.cover} />
        <h2>{title}</h2>
      </Link>
      <img
        src={icon}
        alt="Favorite"
        className={styles.favorite}
        onClick={() => addFavorite({ id, title, coverImage })}
      />
    </div>
  );
}

export default Card;
