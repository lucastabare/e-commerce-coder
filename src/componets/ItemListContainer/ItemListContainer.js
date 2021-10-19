import React from "react";
import ItemList from "../ItemList/ItemList.js";

const ItemListContainer = () => {
  return (
    <div>
      <h1 className="list">
        <ItemList />
      </h1>
    </div>
  );
};

export default ItemListContainer;
