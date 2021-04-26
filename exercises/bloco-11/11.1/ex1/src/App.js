import { Component } from "react";
import style from "./app.module.css";

class Title extends Component {
  render() {
    return (
      <header className={style.title}>
        <h1>* Minha Lista de Tarefas *</h1>
      </header>
    );
  }
}

class Footer extends Component {
  state = {  }
  render() { 
    return ( 
<footer className={style.footer}>
  <p>Criado por &copy;madruga</p>
</footer>
    );
  }
}

const tarefas = [
  "Ouvir uns Rock",
  "Codar uns bagulho muito loko",
  "Dar comida pro cão",
  "Jogar um game",
  "Estudar React pq o bagulho é loko"
];

const Tasks = () => {
  return (
    <ul className={style.list}>
      {tarefas.map((tarefa) => (
        <li>{tarefa}</li>
      ))}
    </ul>
  );
};

function App() {
  return (
    <div>
      <Title />
      <Tasks />
      <Footer />
    </div>
  );
}

export default App;
