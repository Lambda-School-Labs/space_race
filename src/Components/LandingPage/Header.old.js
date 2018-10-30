import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler,
  NavItem, NavLink } from '../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/reactstrap';
import { Textfit } from 'react-textfit';
 
class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="Header">
        <Navbar color="inverse" inverse toggleable fixed="top">
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">
            <div className="SpaceRace">
              <p className="name">SpaceRace</p>
              <div className="title">
              
              CREATE TEAMS AND RACE AGAINST YOUR FRIENDS!!
             
              </div>
            </div>
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar >
              <NavItem>
                <NavLink href="#SignUp">SignUp</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#SignIn">SignIn</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#About">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;