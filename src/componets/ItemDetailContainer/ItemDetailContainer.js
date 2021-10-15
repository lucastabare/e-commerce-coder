import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import ItemDatail from "../ItemDatail/ItemDatail.js";

const ItemDetailContainer = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow} style={{ width: "100%" }}>
        Detalles
      </Button>
      <Modal show={show} onHide={handleClose}>
        <ItemDatail props={props.props} />
      </Modal>
    </>
  );
};

export default ItemDetailContainer;
