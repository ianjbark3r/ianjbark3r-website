import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Contact from './pages/Contact';
import Home from './pages/Home';
import Resume from './pages/Resume';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
