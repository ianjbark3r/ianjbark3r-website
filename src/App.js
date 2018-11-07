import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navigation from './components/layout/Navigation';

import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}
