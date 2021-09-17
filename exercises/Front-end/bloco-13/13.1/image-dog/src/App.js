import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "",
    };
  }

  fetchDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    this.setState({ data: data });
  };

  verifyBrand = ({ data: { message } }) =>
    message.includes("terrier") ? true : false;

  shouldComponentUpdate(_nextProps, nextState) {
    if (this.verifyBrand(nextState)) {
      return false;
    }
    return true;
  }

  componentDidMount() {
    this.fetchDog();
  }

  render() {
    const { data } = this.state;
    const showLoading = <span>Loading...👹️</span>;
    const imageDog = <img width="400" src={data.message} alt="Imagem do Cão" />;

    return (
      <div className="App">
        <div>
          <h1>Aqui você vai ver o Cão!</h1>
          {data === "" ? showLoading : imageDog}
        </div>
        <button onClick={this.fetchDog}>Novo Cão!</button>
      </div>
    );
  }
}

export default App;
