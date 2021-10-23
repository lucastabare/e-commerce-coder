import React from "react";
import ItemCount from "../ItemCount/ItemCount.js";
import ItemList from "../ItemList/ItemList.js";

function ItemListContainer() {
  return (
    <div>
      <ItemList />;
      <ItemCount stock="15" initial="1" />
    </div>
  );
}

export default ItemListContainer;