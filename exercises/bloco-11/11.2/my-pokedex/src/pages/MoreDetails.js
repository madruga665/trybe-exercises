import React from 'react';
import PokemonDetails from '../components/PokemonDetails';
import pokemons from "../helpers/data";

class MoreDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    }
  }
  componentDidMount() {
    this.fetchPokemon();
  }

  findPokemon = (id) => {
    const filtered = pokemons.find((pokemon) => pokemon.id === Number(id) );
    return filtered;
  }
  
  fetchPokemon =  () => {
    const { match: { params: { id } } } = this.props;
    const data = this.findPokemon(id)
    this.setState({pokemon: data})
    console.log(data)
  };
  render() {
    const { pokemon } = this.state;
    const { id } = pokemon;
    return (
      <div className="pokedex-container">
        <h1>oi eu sou o more datails{id}</h1>
        <span>nois que voa dog!</span>
        <PokemonDetails pokemon={ pokemon } />
      </div>
    );
  }
}

export default MoreDetails;
