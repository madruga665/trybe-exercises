import React from "react";
import PokemonDetails from "../components/PokemonDetails";
import pokemons from "../helpers/data";

class MoreDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      loading: true,
    };
  }
  componentDidMount() {
    this.fetchPokemon();
  }

  findPokemon = (id) => {
    const filtered = pokemons.find((pokemon) => pokemon.id === Number(id));
    return filtered;
  };

  fetchPokemon = () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const data = this.findPokemon(id);
    this.setState({ pokemon: data, loading: false });
  };
  render() {
    const { pokemon, loading } = this.state;
    return (
      <>{loading ? "Loading..." : <PokemonDetails pokemon={pokemon} />} </>
    );
  }
}

export default MoreDetails;
