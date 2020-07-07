import React from 'react';
import { Link } from 'react-router-dom';

const liClasses = "mb-2"

const Footer = () => {
  return (
    <footer style={{ 
        backgroundColor:"black", 
        color:"white"
      }} 
      className="row justify-content-center p-5"
    >
      <div className="col">
        Copyright Ian J Barker, 2020
      </div>
      <div className="col text-right">
        <ul style={{ listStyleType:"none" }}>
          <li className={liClasses}>
            <a href="https://github.com/ianjbark3r">
              GitHub
            </a>
          </li>
          <li className={liClasses}>
            <a href="www.linkedin.com/in/ian-j-barker">
              LinkedIn
            </a>
          </li>
          <li className={liClasses}>
            <Link to="/contact">
              Contact
            </Link>
          </li>
          <li className={liClasses}>
            <a href="https://twitter.com/ianjbark3r">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
};

export default Footer;