import React from 'react';
import { BrowserRouter as Router,
  Route,
  Switch, 
} from "react-router-dom";
import Footer from './components/Footer';
import { Header, Title } from './components/MainComponents';
import Feed from './pages/Feed';
import XPlay from './pages/XPlay';
import Search from './pages/Search';
import Account from './pages/Account';
import GSatPlay from './pages/GSatPlay';

function App() {
  return (
    <Router>
      <Header>
        <Title>globoX</Title>
      </Header>
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/xplay" component={XPlay} />
        <Router path="/xplay/gsatplay" component={GSatPlay} />
        <Route path="/buscar" component={Search} />
        <Route path="/sua-conta" component={Account} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
