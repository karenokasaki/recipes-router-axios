import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

function DetailRecipe() {
  const { recipeId } = useParams();
  console.log(recipeId);

  const [recipe, setRecipe] = useState({
    ingredients: [],
    preparationMethod: [],
  });

  useEffect(() => {
    async function fetchRecipe() {
      let response = await axios.get(
        `https://ironrest.herokuapp.com/recipes/${recipeId}`
      );
      setRecipe(response.data);
    }

    fetchRecipe();
  }, []);

  console.log(recipe);

  return (
    <>
      <h1>{recipe.name}</h1>
      <img src={recipe.imageUrl} alt={"comida"} />
      <ListGroup>
        <ListGroupItem active>Ingredientes</ListGroupItem>
        {recipe.ingredients.map((cE) => {
          return <ListGroupItem key={cE}>{cE}</ListGroupItem>;
        })}
      </ListGroup>

      <ListGroup numbered>
        <ListGroupItem active>Modo de Preparo</ListGroupItem>

        {recipe.preparationMethod.map((cE) => {
          return <ListGroupItem key={cE}>{cE}</ListGroupItem>;
        })}
      </ListGroup>
    </>
  );
}

export default DetailRecipe;
