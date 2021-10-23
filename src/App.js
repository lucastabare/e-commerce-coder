import React, {  Fragment } from "react";
import "./App.css";
import NavBar from "./componets/Navbar/navBar.js";
import "bootstrap/dist/css/bootstrap.css";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";
import Carrusel from "./componets/Carrusel/Carrusel";

function App() {
  return (
    <Fragment>
      <div className="App">
        <NavBar />
        <h1>Tienda Fenix</h1>
        <Carrusel/>
        <ItemListContainer />
      </div>
      </Fragment>
  );
}

export default App;
