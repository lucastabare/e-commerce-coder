import { Card, Image } from "semantic-ui-react";

const Item = ({ data }) => {
  return (
    <div className="UserCard UserSection">
      <Card>
        <Card.Content>
          <Image src={data.img} wrapped ui={false} />
          <Card.Header>{data.producto}</Card.Header>
          <Card.Meta>{data.precio}</Card.Meta>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Item;
