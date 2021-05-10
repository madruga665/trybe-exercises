import React from 'react';
import PokemonDetails from '../components/PokemonDetails';
import pokemons from "../helpers/data";

class MoreDetails extends React.Component {
  constructor(props) {
    super(props);
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
  };
  render() {
    if (Object.keys(this.state.pokemon).length === 0 ) {
      return null;
    }
    const { pokemon } = this.state;
    return (
      <div>
        <PokemonDetails pokemon={ pokemon } />
      </div>
    );
  }
}

export default MoreDetails;
