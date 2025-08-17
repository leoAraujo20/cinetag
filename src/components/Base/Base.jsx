import { FavoriteProvider } from "@/contexts/Favorites";
import Header from "../Header";
import Container from "../Container";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

function Base() {
  return (
    <FavoriteProvider>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </FavoriteProvider>
  );
}

export default Base;
