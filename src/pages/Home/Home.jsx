import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Title from "@/components/Title";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/leoAraujo20/cinetag-fake-api/videos")
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <>
      <Banner image="/images/banner-home.png" />
      <Title>
        <h1>Um lugar para salvar seus filmes</h1>
      </Title>
      <section className={styles.cards}>
        {videos.map((film) => (
          <Card key={film.id} {...film} />
        ))}
      </section>
    </>
  );
}

export default Home;
