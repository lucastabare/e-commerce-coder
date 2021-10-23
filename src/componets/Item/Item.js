import { Card, Image } from "semantic-ui-react";

const Item = ({ data }) => {
  
  return (
    <div className="UserCard UserSection">
      <Card>
        <Card.Content>
          <Image src={data.picUrl} wrapped ui={false} />
          <Card.Header>{data.title}</Card.Header>
          <Card.Meta>{data.precie}</Card.Meta>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Item;
