import React from 'react'
import './App.css';
import Contact from './menu/game/Contact';
import Home from './menu/game/Home';
import GameDetail from './menu/game/GameDetail';
import { BrowserRouter, Route, Switch } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <a href="/">Home</a>
      <a href="/contact">Contact</a>
      <BrowserRouter>
        <Switch>
          <Route path={`/`} exact component={Home} />
          <Route path={`/details/:id`} exact render={(props) => <GameDetail {...props} />} />
          <Route path={`/contact`} exact render={(props) => <Contact {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;