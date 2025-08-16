import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Title from "@/components/Title";
import films from "@/mocks/db.json";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Banner image="/images/banner-home.png" />
      <Title>
        <h1>Um lugar para salvar seus filmes</h1>
      </Title>
        <section className={styles.cards}>
          {films.map((film) => (
            <Card key={film.id} {...film} />
          ))}
        </section>
    </>
  );
}

export default Home;
