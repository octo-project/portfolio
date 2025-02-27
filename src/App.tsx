import Cv from "./components/Cv";
import { store} from './redux/store';
import Provider from "./provider/index";
import Project from "./components/Projects";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact/Contact";
import Container from "./common/container/Container";
import {Provider as ReduxProvider} from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LocaleFormater from "./common/LocaleFormater/LocaleFormater";

const App = () => {
  return (
    <ReduxProvider store={store}>
        <BrowserRouter>
          <LocaleFormater>
            <Provider>
              <Switch>
                <Route exact path="/" component={Container(Cv)} />
                <Route exact path="/projects" component={Container(Project)} />
                <Route exact path="/contact" component={Container(Contact)} />
                <Route exact path="/project/:name" component={Container(Project)} />
                <Route component={NotFound} />
              </Switch>
            </Provider>
          </LocaleFormater>
        </BrowserRouter>
    </ReduxProvider>
  );
}
 

export default App;
