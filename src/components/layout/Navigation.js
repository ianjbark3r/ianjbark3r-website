import React from 'react';
import PropTypes from 'prop-types';
import NavElement from '../NavElement';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap';
import gitLogo from '../../github-logo.png';

  const navElements = [
    {
      title: "Home",
      to: "/"
    },
    {
      title: "Projects",
      to: "projects"
    },
    {
      title: "Résumé",
      to: "resume"
    },
    {
      title: "Contact",
      to: "contact"
    }
  ];

export default class Navigation extends React.Component {
  constructor() {
    super()

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  getTOD() {
    const d = new Date();
    const tod = d.getHours();

    if (tod <=2) {
      return 'evening';
    } else if (tod > 2 && tod < 12) {
      return 'morning';
    } else if (tod >= 12 && tod < 18) {
      return 'afternoon';
    } else if (tod >= 18) {
      return 'evening';
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Navbar dark color="dark" className="navbar-expand-lg fixed-top shadow" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <NavbarBrand style={{ color: "white" }} href="/" ><a href="https://github.com/ianjbark3r" target="_blank"><img src={gitLogo} style={{ width: 20 }}/></a></NavbarBrand>
            </div>
            <NavbarToggler className="navbar-toggler" onClick={this.toggleNavbar} />
            <Collapse isOpen={!this.state.collapsed} id="navbar-main" navbar>
              <Nav navbar>
                {navElements.map(navElement => {
                  return (
                    <NavElement navElement={navElement} onClick={this.toggleNavbar} />
                  )
                })}
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </header>
    )
  }
}

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

NavbarToggler.propTypes = {
  type: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}
