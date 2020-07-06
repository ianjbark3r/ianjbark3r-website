import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem, Navbar, NavbarBrand, Nav } from 'reactstrap';

import gitLogo from '../../images/github-logo.png';
import homeIcon from '../../images/home-icon.png';

export default class Navigation extends React.Component {
  constructor() {
    super()

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Navbar 
          dark
          className="fixed-top" 
          role="navigation"
        >
          <div className="container">
            <div className="navbar-header mr-auto">
              <NavbarBrand 
                style={{ color: "white" }} 
                href="https://github.com/ianjbark3r" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  style={{ width: 20 }}
                  src={gitLogo}
                  alt="Github logo" 
                />
              </NavbarBrand>
            </div>
            <Nav style={{ color:"white" }} className="ml-auto" navbar>
              <NavItem>
                <Link to="/">
                  <img src={homeIcon} alt="home" />
                </Link>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
      </header>
    )
  }
}
