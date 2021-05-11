import React from "react";
import pikachuChorando from "../assets/tenor.gif";
import './styles/NotFound.css'

class NotFound extends React.Component {
  state = {};
  render() {
    return (
      <section className="not-found-container">
        <h1>Sorry! Not Found Page</h1>
        <img src={pikachuChorando} alt="pikachu chorando" />
      </section>
    );
  }
}

export default NotFound;
