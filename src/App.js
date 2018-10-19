import React, { Component } from 'react';
import './styles/App.css';
import Landing from './components/Landing';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
          <Landing />
        </header>
      </div>
    );
  }
}

export default App;
