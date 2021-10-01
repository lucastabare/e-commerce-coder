import React from "react";
import { useState } from "react";
import { Button } from "semantic-ui-react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial }) => {
  const [contador, setContador] = useState(parseInt(initial));

  const addProduct = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const subsProduct = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="">
      <Button className="addProduct" color="green" onClick={addProduct}>
        +
      </Button>
      <p>{contador}</p>
      <Button className="subsProduct" color="red" onClick={subsProduct}>
        -
      </Button>
    </div>
  );
};

export default ItemCount;
