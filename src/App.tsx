import Cv from "./components/Cv";
import Provider from "./provider/index";
import { useSelector } from 'react-redux';
import { createIntl } from '@formatjs/intl';
import Project from "./components/Projects";
import {RootState, store} from './redux/store';
import Contact from "./components/Contact/Contact";
import Container from "./common/container/Container";
import fr_locale from './common/formatJs/fr/fr.json';
import en_locale from './common/formatJs/en/en.json';
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
                <Route exact path="/cv" component={Container(Cv)} />
                <Route exact path="/" component={Container(Project)} />
                <Route exact path="/contact" component={Container(Contact)} />
                <Route exact path="/project/:name" component={Container(Project)} />
              </Switch>
            </Provider>
          </LocaleFormater>
        </BrowserRouter>
    </ReduxProvider>
  );
}
 

export default App;
