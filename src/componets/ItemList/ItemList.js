import React, { useEffect, useState } from "react";
import Item from "../Item/Item.js";

const ItemList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Item data={user} />
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
