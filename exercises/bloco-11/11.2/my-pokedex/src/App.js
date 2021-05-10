import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import MoreDetails from "./pages/MoreDetails";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/pokemon/:id"
          render={(routProps) => routProps}
          component={MoreDetails}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
