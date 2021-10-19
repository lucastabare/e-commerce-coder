import React from "react";
import { Card, Image } from "semantic-ui-react";

function randomNum(max) {
  return Math.floor(Math.random() * max);
}

const Item = ({ data }) => (
  <Card>
    <Image className="img" src={data.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>
        {" "}
        <span className="info">Nombre de Usuario: {data.login}</span>{" "}
      </Card.Header>
      <Card.Meta>
        {" "}
        <span className="info">
          {" "}
          {data.login} Es es Usuario N° {data.id} en Registrarse
        </span>{" "}
      </Card.Meta>
      <Card.Description>
        {" "}
        <span className="info">Su node id es: {data.node_id} </span>{" "}
      </Card.Description>
    </Card.Content>
  </Card>
);

export default Item;
