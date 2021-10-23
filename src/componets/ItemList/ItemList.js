import Item from "../Item/Item.js";
import React, { useState, useEffect } from "react";

const ItemList = () => {
  const [users, setUser] = useState([]);
  

  useEffect(() => {
    fetch("../../data/productos.json")
      .then((response) => response.json())
      .then((data) => setUser(data));
  },[]);
  
  return (
    <div>
      <h1>Productos</h1>
      {users.map((user) => {
        return (
          <div>
            <Item data={user} />
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;