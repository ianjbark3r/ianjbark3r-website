import React from 'react';
import { Link } from 'react-router-dom';

export default class NavItem extends React.Component {
  render() {
    const { to, title } = this.props.navItem
    return(
      <li className="nav-item">
        <Link to={to}>
          <a className="nav-link" onClick={this.props.onClick}>{title}</a>
        </Link>
      </li>
    );
  }
}
