import Title from "../Title";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <>
      <Title>
        <h1>Ops!</h1>
      </Title>
      <section className={styles.notFound}>
        <p>A página que você está procurando não existe.</p>
      </section>
    </>
  );
}

export default NotFound;
