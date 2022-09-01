import Api from "../../components/Api.js";

function Home({ favoritos, setFavoritos }) {
  console.log(favoritos);
  return (
    <div>
      <h1>Nossas Receitas</h1>
      <Api favoritos={favoritos} setFavoritos={setFavoritos} />
    </div>
  );
}

export default Home;
