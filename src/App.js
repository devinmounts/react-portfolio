import React, { Component } from 'react';
import './styles/App.css';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import Bio from './components/Bio';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import scrollToComponent from 'react-scroll-to-component';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props){
    super(props)
    this.handleScrollToComponent = this.handleScrollToComponent.bind(this);
    this.state = {
      selectedComponent: null,
    }
  }

  handleScrollToComponent(component){
    let newSelectedComponent;
    switch (component) {
      case 'this.Bio':
        newSelectedComponent = this.Bio
        this.setState({
          selectedComponent: newSelectedComponent
        });
        break;
      case 'this.Portfolio':
      newSelectedComponent = this.Portfolio
      this.setState({
        selectedComponent: newSelectedComponent
      });
      break;
      case 'this.Contact':
      newSelectedComponent = this.Contact
      this.setState({
        selectedComponent: newSelectedComponent
      });
      break;
      default:
    }
  }
  render() {
    scrollToComponent(this.state.selectedComponent, {align: 'top'});
    let component;
    return (
      <div>
          <Navigation onScrollToComponent={this.handleScrollToComponent} />
          <Landing />
          <Bio ref={(component) => {this.Bio = component}}/>
          <Portfolio ref={(component) => {this.Portfolio = component}}/>
          <Contact ref={(component) => {this.Contact = component}}/>
      </div>
    );
  }
}

App.propTypes = {
  onScrollToComponent: PropTypes.func
}

export default App;
