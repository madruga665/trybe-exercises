import React from "react";
import './styles/pokemonDetails.css'

class PokemonDetails extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, summary, image, foundAt } = pokemon;

    return (
      <section className="pokedex">
        <div className="pokemon">
          <div>
            <p>Nome: {name}</p>
            <p>Type: {type}</p>
          </div>
          <div>
            <img src={image} alt="foto do pokemon" />
          </div>
        </div>
        <div>
          <h2>Summary:</h2>
          <h3>{summary}</h3>
        </div>
        <div className="locations-container">
          <h2>Locations:</h2>
          {foundAt.map((item, index) => {
            return (
              <div key={index}>
                <span>{item.location}</span> <br/>
                <img className="image-map" src={item.map} alt="foto do mapa" />
                <hr/>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default PokemonDetails;
