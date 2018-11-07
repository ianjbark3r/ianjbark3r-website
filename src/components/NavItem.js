import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

NavItem.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func
}
