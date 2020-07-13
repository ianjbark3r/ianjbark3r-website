import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

import { CTAdiv } from '../../Styles';

const CTA = () => {
  return (
    <CTAdiv className="row justify-content-center">
      <div className="col-lg-4 col-md-6 col-sm-8 col-9">
        <ScrollAnimation animateIn='bounceInRight'>
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
        </ScrollAnimation>
        <hr/>
        <ScrollAnimation 
          animateIn='bounceInRight' 
          delay={1000}
        >
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
        </ScrollAnimation>
      </div>
    </CTAdiv>
  )
}

export default CTA