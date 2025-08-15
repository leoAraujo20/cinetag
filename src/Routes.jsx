import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
