import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navigation.css';

class Navigation extends React.Component {
render() {
  return(
    <nav className="navigation" >
      <Link to="/">Home</Link>
      <Link>About</Link>
      <Link>Favorite Pokemons</Link>
    </nav>
  )
}

}

export default Navigation;