import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import DetailRecipe from "./pages/DetailRecipe";
import FavPage from "./pages/FavPage";
import NavbarComponent from "./components/Navbar";
import { useState } from "react";
import TreinoAxiosPage from "./pages/TreinoAxiosPage";

function App() {
  const [favoritos, setFavoritos] = useState([]);

  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route
          path="/"
          element={<Home favoritos={favoritos} setFavoritos={setFavoritos} />}
        />
        <Route path="/recipe/:recipeId" element={<DetailRecipe />} />
        <Route
          path="/favoritos"
          element={
            <FavPage favoritos={favoritos} setFavoritos={setFavoritos} />
          }
        />

        <Route path="/treino-axios" element={<TreinoAxiosPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
