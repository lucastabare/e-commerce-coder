import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import ItemCount from "./ItemCount.js";

function ItemListContainer() {
  return (
    <div className="UserCard UserSection">
      <Card.Group>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            />
            <Card.Header>Memoria RAM 8GB</Card.Header>
            <Card.Meta>Adata</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <ItemCount stock="15" initial="1" />
        </Card>

        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://react.semantic-ui.com/images/avatar/large/molly.png"
            />
            <Card.Header>Asus ROG B450-b</Card.Header>
            <Card.Meta>Asus ROG</Card.Meta>
            <Card.Description>
              Molly wants to add you to the group <strong>musicians</strong>
            </Card.Description>
          </Card.Content>
          <ItemCount stock="5" initial="1" />
        </Card>

        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
            />
            <Card.Header>Micro Procesador</Card.Header>
            <Card.Meta>ADM RYZEN 5</Card.Meta>
            <Card.Description>
              Jenny requested permission to view your contact details
            </Card.Description>
          </Card.Content>
          <ItemCount stock="10" initial="1" />
        </Card>
      </Card.Group>
    </div>
  );
}

export default ItemListContainer;
