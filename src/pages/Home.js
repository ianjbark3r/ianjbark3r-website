import React from 'react';

import Footer from '../components/layout/Footer';
import Hero from '../components/layout/Hero';
import Navigation from '../components/layout/Navigation';
import Projects from './Projects';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Navigation />
        <Hero />
        <Projects />
        <Footer />
      </div>
    )
  }
};
