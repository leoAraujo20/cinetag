import Banner from "@/components/Banner";
import styles from "./Player.module.css";
import Title from "@/components/Title";
import { useParams } from "react-router";
import NotFound from "@/components/NotFound/NotFound";
import { useEffect, useState } from "react";

function Player() {
  const params = useParams();
  const [video, setVideo] = useState();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/leoAraujo20/cinetag-fake-api/videos?id=${params.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideo(...data)
      });
  }, [params.id]);

  if (!video) {
    return <NotFound />;
  }

  return (
    <>
      <Banner image="/images/banner-player.png" />
      <Title>
        <h1>{video.title}</h1>
      </Title>
      <section className={styles.player}>
        <iframe
          src={video.link}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}

export default Player;
