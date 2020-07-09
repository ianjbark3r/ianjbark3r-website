import React from 'react';
import { Link } from 'react-router-dom';

import { CTAdiv } from '../../Styles';

const CTA = () => {
  return (
    <CTAdiv className="row justify-content-center">
      <div className="col-lg-4 col-md-6 col-sm-8 col-9">
        <h1 className="lead text-center">
          <span>
            Like what you see?
          </span> 
          <span>
            <Link to="/contact">
                Let's talk.
            </Link>
          </span>
        </h1>
        <hr/>
        <h1 className="lead text-center">
          <span>
            Need more info?
          </span> 
          <span>
            <Link to="/resume">
              Check out my résumé.
            </Link>
          </span>
        </h1>
      </div>
    </CTAdiv>
  )
}

export default CTA