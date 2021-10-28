import { Card, Image } from "semantic-ui-react";
import ItemCount from "../ItemCount/ItemCount.js";

const Item = ({ data }) => {
  return (
    <div className="UserCard UserSection">
      <Card>
        <Card.Content>
          <Image src={data.img} wrapped ui={false} width="150px" />
          <Card.Header>{data.title}</Card.Header>
          <Card.Meta>{data.price}</Card.Meta>
          <Card.Meta>{data.description}</Card.Meta>
          <Card.Meta>{data.stock}</Card.Meta>
        </Card.Content>
        <ItemCount />
      </Card>
    </div>
  );
};

export default Item;
