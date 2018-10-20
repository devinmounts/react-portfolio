import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './../styles/Navigation.css';
import PropTypes from 'prop-types';

class Navigation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      component: null
    }

  }

  handleScrollToComponent = (selected) => {
    this.props.onScrollToComponent(selected);
  }

  render(){
    return(
      <Navbar inverse collapseOnSelect className='navigation'>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Devin Mounts</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav onSelect={this.handleScrollToComponent} pullRight>
            <NavItem eventKey={'this.Bio'}>
              Bio
            </NavItem>
            <NavItem eventKey={'this.Portfolio'}>
              Portfolio
            </NavItem>
            <NavItem eventKey={'this.Contact'}>
              Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Navigation.propTypes = {
  onScrollToComponent: PropTypes.func
}

export default Navigation;
