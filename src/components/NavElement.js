import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavItem, NavLink } from 'reactstrap';

export default class NavElement extends React.Component {
  render() {
    const { to, title } = this.props.navElement
    return(
      <NavItem>
        <Link to={to}>
          <NavLink onClick={this.props.onClick}>{title}</NavLink>
        </Link>
      </NavItem>
    );
  }
}

NavElement.propTypes = {
  onClick: PropTypes.func
}
