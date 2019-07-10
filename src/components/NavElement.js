import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavItem } from 'reactstrap';

export default class NavElement extends React.Component {
  render() {
    const { to, title } = this.props.navElement
    return(
      <NavItem key={`NavItem${this.props.index}`}>
        <Link key={`Link${this.props.index}`} to={to}>
          <strong>
            <p 
              style={{ 
                color:"white", 
                textShadow:"0px 0px 2px #000"
              }} 
              key={`Item${this.props.index}`} 
              className="nav-link my-auto" 
              onClick={this.props.onClick}
            >
              {title}
            </p>
          </strong>
        </Link>
      </NavItem>
    );
  }
}

NavElement.propTypes = {
  onClick: PropTypes.func
}
