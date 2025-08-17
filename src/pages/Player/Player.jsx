import Banner from "@/components/Banner";
import styles from "./Player.module.css";
import Title from "@/components/Title";
import { useParams } from "react-router";
import films from "@/mocks/db.json";

function Player() {
  const params = useParams();
  const film = films.find((film) => film.id === Number(params.id));

  return (
    <>
      <Banner image="/images/banner-player.png" />
      <Title><h1>{film.title}</h1></Title>
      <section className={styles.player}>
        <iframe
          src={film.link}
          title={film.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}

export default Player;
