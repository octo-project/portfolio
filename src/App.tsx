import Cv from "./components/Cv";
import Provider from "./provider/index";
import Project from "./components/Projects";
import Contact from "./components/Contact/Contact";
import Container from "./common/container/Container";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Provider>
      <Switch>
        <Route exact path="/cv" component={Container(Cv)} />
        <Route exact path="/" component={Container(Project)} />
        <Route exact path="/contact" component={Container(Contact)} />
        <Route exact path="/project/:name" component={Container(Project)} />
      </Switch>
    </Provider>
  </BrowserRouter>
);

export default App;
