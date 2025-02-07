import Cv from "./components/Cv";
import Provider from "./provider/index";
import { createIntl } from '@formatjs/intl'
import Project from "./components/Projects";
import Contact from "./components/Contact/Contact";
import Container from "./common/container/Container";
import fr_locale from './common/formatJs/fr/fr.json';
import en_locale from './common/formatJs/en/en.json';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const messages = {
  en: en_locale,
  fr: fr_locale,
};

const locale = 'en'

const App = () => {

  const intl = createIntl(
    {
      locale,
      messages: messages[locale] as Record<string, string> | Record<string, any[]>,
    }
  );

  return (
    <BrowserRouter>
      <Provider>
        {intl.formatMessage({id: "description"})}
        <Switch>
          <Route exact path="/cv" component={Container(Cv)} />
          <Route exact path="/" component={Container(Project)} />
          <Route exact path="/contact" component={Container(Contact)} />
          <Route exact path="/project/:name" component={Container(Project)} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}
 

export default App;
