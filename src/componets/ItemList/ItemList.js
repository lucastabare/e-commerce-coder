import Item from "../Item/Item.js";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.js";

const ItemList = () => {
  const [products, setProduct] = useState([]);

  //const [users, setUser] = useState([]);

  useEffect(() => {
    const pedirData = async () => {
      const docs = [];
      const items = await getDocs(collection(db, "products"));
      //console.log(items);
      items.forEach((document) => {
        //console.log(document.data());
        docs.push({ ...document.data(), id: document.id });
      });
      setProduct(docs);
    };
    pedirData();
  }, []);

  /* useEffect(() => {
    fetch("../../data/productos.json")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []); */

  return (
    <div>
      <h1>Productos</h1>
      {products.map((user) => {
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
