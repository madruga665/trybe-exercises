import React from "react";

class PokemonDetails extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, summary, image, foundAt } = pokemon;

    console.log(pokemon)
    return (
      <div className="pokedex">
        <div className="pokemon">
          <p>Nome: {name}</p>
          <p>Type: {type}</p>
          <div>
            <img src={image} alt="foto do pokemon" />
          </div>
        </div>
        <div>
          <h2>Summary</h2>
          <h3>{summary}</h3>
        </div>
        <div>
          <h2>Location</h2>
          {/* <span>{foundAt[0].location}</span>
          <img src={foundAt[0].map} alt="foto do pokemon" /> */}
        </div>
      </div>
    );
  }
}

export default PokemonDetails;
