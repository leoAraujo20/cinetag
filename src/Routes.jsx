import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Favorites from "./pages/Favorites";
import Container from "./components/Container";
import { FavoriteProvider } from "./contexts/Favorites";
import Player from "./pages/Player";
import NotFound from "./components/NotFound/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <FavoriteProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favorites />} />
            <Route path="/player/:id" element={<Player />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </FavoriteProvider>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
