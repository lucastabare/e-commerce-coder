import React from "react";
import { Button, Icon } from "semantic-ui-react";

class CardWidget extends React.Component {
  render() {
    return (
      <div>
        <Button animated="vertical">
          <Button.Content hidden>Shop</Button.Content>
          <Button.Content visible>
            <Icon name="shop" />
          </Button.Content>
        </Button>
      </div>
    );
  }
}

export default CardWidget;
