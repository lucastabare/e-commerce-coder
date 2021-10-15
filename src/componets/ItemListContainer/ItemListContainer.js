import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.js";
import { Row, Col } from "react-bootstrap";

import dataProductos from "../data/productos.json";

function ItemListContainer() {
  const [producList, setProduc] = useState(0);

  useEffect(() => {
    const traerData = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(dataProductos);
      }, 2000);
    });

    traerData.then((response) => {
      setProduc(response);
    });
  }, []);

  return (
    <>
      <Row className="item-list-container">
        <Col md={12} className="d-flex justify-content-center">
          <ItemList items={producList} />
        </Col>
      </Row>
    </>
  );
}

export default ItemListContainer;
