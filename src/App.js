import React, { Component } from 'react';
import './styles/App.css';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import Bio from './components/Bio';

class App extends Component {
  render() {
    return (
      <div>
          <Navigation />
          <Landing />
          <Bio />
      </div>
    );
  }
}

export default App;
