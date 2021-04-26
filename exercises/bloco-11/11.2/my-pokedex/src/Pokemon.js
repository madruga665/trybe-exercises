import React from "react";
import "./pokemon.css";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className="pokemon">
        <div>
          <p>Nome: {name}</p>
          <p>Tipo: {type}</p>
          <p>Peso: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <div>
          <img src={image} alt="foto do pokemon" />
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number,
  measurementUnit: PropTypes.string,
};

export default Pokemon;
