import React from 'react';
import { BrowserRouter as Router,
  Route,
  Switch, 
} from "react-router-dom";
import Footer from './components/Footer';
import { Header, Title } from './components/MainComponents';
import { Body } from "./components/PageStyles";
import Feed from './pages/Feed';
import XPlay from './pages/XPlay';
import Search from './pages/Search';
import Account from './pages/Account';

function App() {
  return (
    <Body>
      <Router>
        <Header>
          <Title>globoX</Title>
        </Header>
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route path="/xplay" component={XPlay} />
          <Route path="/buscar" component={Search} />
          <Route path="/sua-conta" component={Account} />
        </Switch>
        <Footer />
      </Router>
    </Body>
  );
}

export default App;
