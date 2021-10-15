import { Modal, Card, Badge } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount.js";

const ItemDatail = (props) => {
  const { title, stock, price, picUrl, description, id } = props.props;
  const product = {
    stock: stock,
    initial: 1,
    onAdd: (stock, cantdidad) => {
      alert(`Se agregan ${cantdidad} unidades al carrito`);
      return stock - cantdidad;
    },
    precio: price,
  };
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>
          <Card.Img variant="top" src={picUrl} width="80%" />
          <Card.Body>
            <Card.Text>
              <span style={{ textAlign: "center" }}>
                <Badge bg="success">SKU: {id} </Badge>
              </span>
              <br />
              <span>{description}</span>
              <br />
              <span>
                <Badge bg="danger">Precio: ${price}</Badge>
              </span>
            </Card.Text>
            <ItemCount props={product} />
          </Card.Body>
        </Card>
      </Modal.Body>
    </>
  );
};

export default ItemDatail;
