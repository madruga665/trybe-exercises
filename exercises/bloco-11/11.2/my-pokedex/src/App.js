import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import MoreDetails from "./pages/MoreDetails";
import Navigation from "./components/Navgation";

function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/pokemon/:id"
            render={(routProps) => routProps}
            component={MoreDetails}
          />
        </Switch>
      </BrowserRouter>
    </section>
  );
}

export default App;
