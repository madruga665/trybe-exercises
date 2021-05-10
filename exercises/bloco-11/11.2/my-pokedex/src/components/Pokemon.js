import React from "react";
import "./styles/pokemon.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { id, name, type, averageWeight, image } = pokemon;
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
        <Link  to={`/pokemon/${id}`} >More Datails</Link>
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
