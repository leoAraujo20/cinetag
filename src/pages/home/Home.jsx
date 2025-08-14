import Banner from '@/components/Banner';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header';
import Title from '@/components/Title';

function Home() {
  return (
    <>
      <Header />
      <Banner image='/images/banner-home.png' />
      <Title><h1>Um lugar para salvar seus filmes</h1></Title>
      <Footer />
    </>
  );
}

export default Home;
