import React from "react";
import logo from "../../logo.png";
import CardWidget from "../CardWidget/CardWidget.js";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid ">
          <img src={logo} alt="" className="logo" />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="navbar-brand" aria-current="page" href="#">
                  Marcas
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="#">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" aria-current="page" href="#">
                  Mis Pedidos
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" aria-current="page" href="#">
                  ARMA TU PC
                </a>
              </li>
            </ul>
            <CardWidget />

            <form className="d-flex" name="Form">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Busca Un Prodcuto"
                name=" busqueda"
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
