import "./App.css";
import NavBar from "./componets/Navbar/navBar.js";
import "bootstrap/dist/css/bootstrap.css";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <h1>E-commerce Fenix</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid quia
          tempore, quidem mollitia sapiente obcaecati dolores velit distinctio
          sed dolorem officiis asperiores laborum perferendis harum suscipit
          omnis dolorum earum sequi.
        </p>
        <ItemListContainer />
      </div>
    </>
  );
}

export default App;
