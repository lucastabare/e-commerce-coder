import React from "react";
import "./App.css";
import NavBar from "./componets/Navbar/navBar.js";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./componets/Views/Home.js";
import Marcas from "./componets/Views/Marcas.js";
import Contacto from "./componets/Views/Contacto.js";
//import ItemDetailContainer from "./componets/ItemDetailContainer/ItemDetailContainer";
import Carrito from "./componets/Views/carrito";
import ItemDatail from "./componets/ItemDatail/ItemDatail";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/marcas" exact component={Marcas} />
          <Route path="/contacto" exact component={Contacto} />
          <Route path="/carrito" exact component={Carrito} />
          <Route path="/itemdetail" exact component={ItemDatail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
