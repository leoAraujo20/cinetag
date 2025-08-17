import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Favorites from "./pages/Favorites";
import Container from "./components/Container";
import { FavoriteProvider } from "./contexts/Favorites";
import Player from "./pages/Player";
import NotFound from "./components/NotFound/NotFound";
import Base from "./components/Base";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Base />} path="/">
          <Route index element={<Home />} />
          <Route path="favoritos" element={<Favorites />} />
          <Route path="player/:id" element={<Player />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
