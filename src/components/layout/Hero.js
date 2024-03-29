import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import {
  Credit,
  CTA,
  HeroBG,
  HeroTitle,
  JobTitle,
  MyName,
  Tagline
} from '../../Styles';

const Hero = () => {
  return (
    <div className="row">
      <HeroBG className="col">
        <HeroTitle>
          <JobTitle className="mb-0">Full-Stack Developer</JobTitle>
          <MyName className="display-2 mb-2">Ian J Barker</MyName>
          <Tagline>
            <h3>
              <span className="d-block">builds beautiful,</span>
              <span className="d-block">functional things.</span>
            </h3>
          </Tagline>
          <CTA>
            <AnchorLink href="#projects">
              <h3>
                See for yourself
              </h3>
            </AnchorLink>
          </CTA>
          <Credit>
            <a href='https://unsplash.com/photos/LPKk3wtkC-g'>
              (Photo by Evgeni Evgeniev)
                </a>
          </Credit>
        </HeroTitle>
      </HeroBG>
    </div>
  )
};

export default Hero;