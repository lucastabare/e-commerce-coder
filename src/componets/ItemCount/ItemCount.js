import { useState } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";

function ItemCount(props) {
  const { stock, initial, onAdd } = props.props;

  const [cantidad, setCantidad] = useState(initial);
  const [actualStock, setActualStock] = useState(stock);

  const add = () => {
    if (cantidad <= stock - 1) {
      setCantidad(cantidad + 1);
    }
  };

  const substract = () => {
    if (cantidad > initial) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      <p>Cantidad Disponible: {actualStock}</p>
      <InputGroup className="mb-3 form-calculator-minmax">
        <Button
          variant="outline-secondary"
          id="button.addon1"
          onClick={substract}
        >
          -
        </Button>
        <FormControl
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          value={cantidad}
          readOnly
        />
        <Button variant="outline-secondary" id="button-addon1" onClick={add}>
          +
        </Button>
      </InputGroup>
      <Button
        variant="primary"
        onClick={() => {
          actualStock >= cantidad &&
            setActualStock(onAdd(actualStock, cantidad));
          cantidad > actualStock &&
            alert("No queda mas Stock del producto selecionado");
        }}
      >
        Agregar al carrito
      </Button>
    </div>
  );
}

export default ItemCount;
