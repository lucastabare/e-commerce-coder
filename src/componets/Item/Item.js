import { Link } from "react-router-dom";
import { Card, Image, Button } from "semantic-ui-react";


const Item = ({ data }) => {
  return (
    <div className="UserCard UserSection">
      <Card>
        <Card.Content>
          <Image src={data.img} wrapped ui={false} width="150px" />
          <Card.Header>{data.title}</Card.Header>
          <Card.Meta>{data.price}</Card.Meta>
          <Card.Meta>{data.stock}</Card.Meta>
          <Link to="/itemdetail"><Button positive>Agregar al carrito</Button></Link>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Item;
