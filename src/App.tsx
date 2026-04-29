import Card, { CardBody } from "./components/Card";
import Button from "./components/Button";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [data, setData] = useState(["Vegueta", "Broli", "Trunks"]);

  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

  const list: string[] = ["Goku", "Piccolo", "Gohan"];
  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };

  const addMinion = () => setData([...data, "Minion"]);
  const delMinion = () => setData(data.slice(0, data.length - 1));

  return (
    <Card>
      <CardBody title="Hola Mundo" text="Esto es una lista" />

      {list.length !== 0 ? (
        <List data={list} onSelect={handleSelect} />
      ) : (
        "No hay contenido"
      )}
      <Button isLoading={isLoading} onClick={handleClick}>
        Entrar
      </Button>

      <CardBody title="" text="Esta lista Agrega y Elimina 'minions' " />

      <Button onClick={addMinion}>Agregar</Button>
      <Button onClick={delMinion}>Eliminar</Button>
      <List data={data} />
    </Card>
  );
}

export default App;
