import React from "react";
import pokemons from "./data";
import "./pokedex.css";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = { index: 0, pokemons: pokemons, button: false };
    this.filterPokemon = this.filterPokemon.bind(this);
    this.nextPokemon = this.nextPokemon.bind(this);
    this.allTypes = this.allTypes.bind(this);
    this.filtered = this.filtered.bind(this);
  }
  filterPokemon(type) {
    const filtered = pokemons.filter((pokemon) => pokemon.type === type);
    return filtered;
  }
  nextPokemon() {
    this.setState({
      index: this.state.index + 1,
    });
    if (this.state.index === this.state.pokemons.length - 1) {
      this.setState({
        index: 0,
      });
    }
  }

  allTypes() {
    this.setState((state) => {
      return { pokemons: (state = pokemons) };
    });
    this.setState({
      button: false,
    });
  }

  filtered(type) {
    this.filterPokemon(type).length <= 1
      ? this.setState({ button: true })
      : this.setState({ button: false });

    this.setState({
      index: 0,
    });
    this.setState({
      pokemons: this.filterPokemon(type),
    });
  }

  render() {
    return (
      <div className="pokedex">
        <Pokemon pokemon={this.state.pokemons[this.state.index]} />
        <div className="pokemons-type">
          <button onClick={this.allTypes}>All</button>
          <button onClick={() => this.filtered("Electric")}>Electri</button>
          <button onClick={() => this.filtered("Fire")}>Fire</button>
          <button onClick={() => this.filtered("Bug")}>Bug</button>
          <button onClick={() => this.filtered("Poison")}>Poison</button>
          <button onClick={() => this.filtered("Psychic")}>Psychic</button>
          <button onClick={() => this.filtered("Normal")}>Normal</button>
          <button onClick={() => this.filtered("Dragon")}>Dragon</button>
        </div>
        <button onClick={this.nextPokemon} disabled={this.state.button}>
          Proximo pokemon
        </button>
      </div>
    );
  }
}

export default Pokedex;
