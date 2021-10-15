import { Card, Badge } from "react-bootstrap";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer.js";

function Item(props) {
  const { title, picUrl, stock } = props.props;

  return (
    <div className="col-sm-6 col-md-3">
      <Card>
        <Card.Img variant="top" src={picUrl} width="60%">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <div style={{ textAlign: "center" }}>
                <Badge bg="success"> Stock: {stock}</Badge>
              </div>
            </Card.Text>
            <ItemDetailContainer props={props.props} />
          </Card.Body>
        </Card.Img>
      </Card>
    </div>
  );
}

export default Item;
