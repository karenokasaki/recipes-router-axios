import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

function FavPage({ favoritos, setFavoritos }) {
  console.log(favoritos);
  return (
    <>
      <h1>Favoritos</h1>
      <div>
        {favoritos.map((cE) => {
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
                <Button color="success" onClick={() => {}}>
                  Favoritar
                </Button>
                <Button color="danger">Deletar</Button>
                <Link to={`/recipe/${cE._id}`}>
                  <Button outline>Detalhes</Button>
                </Link>
              </div>
            </Card>
          );
        })}
      </div>

      <Link to={"/"}>
        <Button>Voltar</Button>
      </Link>
    </>
  );
}

export default FavPage;
