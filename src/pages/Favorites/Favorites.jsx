import Title from "@/components/Title";
import Banner from "@/components/Banner";
import useFavoriteContext from "@/hooks/useFavoriteContext";
import styles from "./Favorites.module.css";
import Card from "@/components/Card";

function Favorites() {
  const { favorites } = useFavoriteContext();

  return (
    <>
      <Banner image="/images/banner-favoritos.png" />
      <Title>
        <h1>Meus favoritos</h1>
      </Title>
      <section className={styles.cards}>
        {favorites.map((video) => (
          <Card key={video.id} {...video} />
        ))}
      </section>
    </>
  );
}

export default Favorites;
