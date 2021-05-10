import React from "react";
import pokedexKanto from "../assets/pokedex_kanto.png";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <img src={pokedexKanto} alt="pokedex da região de kanto" />
        <h3>Pokedex criada por:</h3>
        <span>madruga665</span>
      </div>
    );
  }
}

export default About;
