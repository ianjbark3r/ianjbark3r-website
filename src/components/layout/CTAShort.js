import React from 'react';
import { Link } from 'react-router-dom';

import { CTAdiv } from '../../Styles';

const CTAShort = () => {
  return (
    <CTAdiv className="row justify-content-center">
      <div className="col-lg-4 col-md-6 col-sm-8 col-9">
        <hr />
        <h1 className="lead text-center">
          <span>
            Questions? Comments?
          </span>
          <span>
            <Link to="/contact">
              Let's connect.
            </Link>
          </span>
        </h1>
        <hr />
      </div>
    </CTAdiv>
  )
};

export default CTAShort;