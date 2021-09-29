import React from "react";
import { useState } from "react";

import { Button } from "semantic-ui-react";

const ItemCount = ({ stock, initial }) => {
  const [contador, setContador] = useState(parseInt(initial));

  const addProduct = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const subsProduct = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div class="">
      <Button color="green" onClick={addProduct}>
        +
      </Button>
      <p color="black">{contador}</p>
      <Button color="red" onClick={subsProduct}>
        -
      </Button>
    </div>
  );
};

export default ItemCount;
