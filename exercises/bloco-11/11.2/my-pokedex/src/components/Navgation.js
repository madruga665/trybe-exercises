import React from "react";
import { Link } from "react-router-dom";
import "./styles/navigation.css";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link>Favorite Pokemons</Link>
        <Link to="/about">About</Link>
      </nav>
    );
  }
}

export default Navigation;
