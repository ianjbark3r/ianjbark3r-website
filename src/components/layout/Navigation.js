import React from 'react';
import NavItem from '../NavItem';

class Navigation extends React.Component {
  constructor() {
    super()

    this.toggleCollapsed = this.toggleCollapsed.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleCollapsed() {
    const collapsed = !this.state.collapsed;
    this.setState({
      collapsed: collapsed
    });
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

  render() {
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";
    const navSettings = "navbar navbar-expand-lg fixed-top navbar-dark bg-dark shadow";
    const navItems = [
      {
        title: "Home",
        to: "/"
      },
      {
        title: "Projects",
        to: "projects"
      },
      {
        title: "Skills",
        to: "skills"
      },
      {
        title: "Contact",
        to: "contact"
      }
    ];

    return (
      <header>
        <nav className={navSettings} role="navigation">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" style={{ color: "white" }} href="/" >Good {this.getTOD()}.</a>
            </div>
            <button type="button" className="navbar-toggler" onClick={this.toggleCollapsed}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={"navbar-collapse " + navClass} id="navbar-main">
              <ul className="navbar-nav">
                {navItems.map(navItem => {
                  return (
                    <NavItem navItem={navItem} onClick={this.toggleCollapsed}/>
                  )
                })}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Navigation;
