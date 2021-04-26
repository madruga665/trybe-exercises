import React from "react";
import pokemons from "./data";
import "./pokedex.css";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    return (
      <div className="pokedex">
        {pokemons.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    );
  }
}

export default Pokedex;
