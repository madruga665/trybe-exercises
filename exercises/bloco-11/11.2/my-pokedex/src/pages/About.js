import React from "react";
import pokedexKanto from "../assets/pokedex_kanto.png";
import './styles/About.css'

class About extends React.Component {
  render() {
    return (
      <section className="about-container">
        <img src={pokedexKanto} alt="pokedex da região de kanto" />
        <h1>pokedex created by:</h1>
        <span>madruga665</span>
      </section>
    );
  }
}

export default About;
