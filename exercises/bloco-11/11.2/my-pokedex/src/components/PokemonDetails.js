import React from "react";

class PokemonDetails extends React.Component {

  render() {
    const { pokemon } = this.props;
    const { name, type, summary, image, foundAt } = pokemon;

    // console.log(pokemon);
    return (
      <section className="pokedex">
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
        {/* <div>
          {foundAt.map((item) => {
            return (
              <>
                <span >{item.location}</span>
                <img src={item.map} alt="foto do mapa" />
              </>
            );
          })}
        </div> */}
      </section>
    );
  }
}

export default PokemonDetails;
