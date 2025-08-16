import Title from "@/components/Title";
import Banner from "@/components/Banner";

function Favorites() {
  return (
    <>
      <Banner image="/images/banner-favoritos.png" />
      <Title>
        <h1>Meus favoritos</h1>
      </Title>
      <section className={StyleSheet.cards}>
      </section>
    </>
  );
}

export default Favorites;
