import React, { Component } from 'react';
import './styles/App.css';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import Bio from './components/Bio';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div>
          <Navigation />
          <Landing />
          <Bio />
          <Portfolio />
          <Contact />
      </div>
    );
  }
}

export default App;
