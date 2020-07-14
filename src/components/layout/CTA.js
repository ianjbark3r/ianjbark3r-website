import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { ConCTA, CTAdiv, ResCTA } from '../../Styles';

const CTA = () => {
  const [show, doShow] = useState({
    connect: false,
    resume: false
  });

  const conRef = useRef(null);
  const resRef = useRef(null);

  useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top;

    const conPos = topPos(conRef.current)
    const resPos = topPos(resRef.current)

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (conPos < scrollPos) {
        doShow(state => ({ ...state, connect: true }));
      } else if (resPos < scrollPos) {
        doShow(state => ({ ...state, resume: true }));
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <CTAdiv className="row justify-content-center">
      <div className="col-lg-4 col-md-6 col-sm-8 col-9">
        <ConCTA 
          animate={show.connect} 
          className="lead text-center"
          ref={conRef}
        >
          <span>
            Like what you see?
          </span> 
          <span>
            <Link to="/contact">
                Let's talk.
            </Link>
          </span>
        </ConCTA>
        <hr/>
        <ResCTA 
          animate={show.connect} 
          className="lead text-center"
          ref={resRef}
        >
          <span>
            Need more info?
          </span> 
          <span>
            <Link to="/resume">
              Check out my résumé.
            </Link>
          </span>
        </ResCTA>
      </div>
    </CTAdiv>
  )
}

export default CTA