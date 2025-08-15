import styles from "./Card.module.css";
import favoriteIcon from "@/assets/icons/favorite.png";

function Card({ id, title, coverImage, link }) {
  return (
    <div className={styles.card}>
      <img src={coverImage} alt={title} className={styles.cover} />
      <h2 className={styles.title}>{title}</h2>
      <img src={favoriteIcon} alt="Favorite" className={styles.favorite} />
    </div>
  );
}

export default Card;
