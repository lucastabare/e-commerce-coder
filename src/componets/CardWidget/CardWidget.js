import { Link } from "react-router-dom";
import React from "react";
import { Button, Icon } from "semantic-ui-react";

class CardWidget extends React.Component {
  render() {
    return (
      <div>
        <Link to="/carrito">
        <Button animated="vertical">
          <Button.Content  hidden>Shop</Button.Content>
          <Button.Content visible>
            <Icon name="shop" />
          </Button.Content>
        </Button>
        </Link>
      </div>
    );
  }
}

export default CardWidget;
