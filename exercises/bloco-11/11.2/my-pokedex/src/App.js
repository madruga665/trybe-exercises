import "./App.css";
import Pokedex from "./components/Pokedex";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="pokedex-container">
        <h1>Pokedex</h1>
        <Pokedex />
      </div>
    </BrowserRouter>
  );
}

export default App;
