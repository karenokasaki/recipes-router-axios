import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";

function Api({ favoritos, setFavoritos }) {
  const [recipes, setRecipes] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    //"https://ironbnb-m3.herokuapp.com/apartments"
    async function fetchRecipes() {
      let response = await axios.get("https://ironrest.herokuapp.com/recipes");
      setRecipes(response.data);
    }

    fetchRecipes();
  }, [reload]);

  console.log(recipes);

  function handleDelete(id) {
    const updatedRecipes = recipes.filter((cE) => {
      return cE._id !== id;
    });
    setRecipes(updatedRecipes);
  }

  function handleForm(recipe) {
    const updatedFavorite = [...favoritos, recipe];

    setFavoritos(updatedFavorite);
  }

  return (
    <>
      <Button onClick={() => setReload(!reload)}>Fazer novo REQUEST</Button>
      <div className="cards">
        {recipes.map((cE) => {
          return (
            <Card
              key={cE._id}
              style={{
                width: "18rem",
              }}
            >
              <img src={cE.imageUrl} alt="house" height={150} />
              <CardBody>
                <CardTitle tag="h5">{cE.name}</CardTitle>
                <CardText>Tempo de preparo: {cE.preparation_time}</CardText>
              </CardBody>
              <div className="buttons">
                <Button
                  color="success"
                  onClick={() => {
                    handleForm(cE);
                  }}
                >
                  Favoritar
                </Button>
                <Button color="danger" onClick={() => handleDelete(cE._id)}>
                  Deletar
                </Button>
                <Link to={`/recipe/${cE._id}`}>
                  <Button outline>Detalhes</Button>
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default Api;
