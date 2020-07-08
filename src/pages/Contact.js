import React from 'react';
import ContactForm from '../components/ContactForm.js';
import styled from 'styled-components';

import Navigation from '../components/layout/Navigation';

import { 
  ContactBG,
  contactColClasses, 
  rowClasses, 
  Title 
} from '../Styles';

export default class Contact extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <ContactBG className="container-fluid">
          <div className={rowClasses}>
            <div className={contactColClasses}>
              <Title>
                <h1 className="display-3">Contact</h1>
              </Title>
            </div>
          </div>
          <div className={rowClasses}>
            <div className={contactColClasses}>
              <hr className="mb-4" />
            </div>            
          </div>
          <div className={rowClasses}>
            <div className={contactColClasses}>    
              <ContactForm />
            </div>            
          </div>          
        </ContactBG>
      </>
    )
  }
};
