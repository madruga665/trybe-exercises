import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import MoreDetails from "./pages/MoreDetails";
import Navigation from "./components/Navgation";
import About from "./pages/About";

function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/pokemon/:id"
            render={(routProps) => <MoreDetails {...routProps}/>}
          />
        </Switch>
      </BrowserRouter>
    </section>
  );
}

export default App;
