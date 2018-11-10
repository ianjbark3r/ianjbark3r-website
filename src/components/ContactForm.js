import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';

export default class contactform extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      emailAddress: "",
      message: ""
    }
  }

  handleChange(e) {
    e.preventDefault()

    const target = e.target
    const name = target.name
    const value = target.value

    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    let templateParams = {
      name: this.state.name,
      emailAddress: this.state.emailAddress,
      message: this.state.message
    }

    this.sendFeedback(templateParams);
  }

  sendFeedback(templateParams) {
    const serviceID = 'mailgun'
    const templateID = 'contact_form'

    window.emailjs
      .send(serviceID, templateID, templateParams)
      .then(function(){
        console.log("Form successfully submitted")
         alert("Sent!");
       }, function(err) {
         alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
    });
  }

  render() {
    return (
      <div className="container col-xl-4 col-lg-6 col-md-8 col-sm-12">
        <form id="myform" style={{ paddingBottom: "5vh" }} onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup>
            <Label for="nameField">Name</Label>
            <Input type="name" name="name" id="nameField" placeholder="Your name" onChange={this.handleChange.bind(this)} />
          </FormGroup>
          <FormGroup>
            <Label for="emailField">Email</Label>
            <Input type="email" name="emailAddress" id="emailField" placeholder="Your email" onChange={this.handleChange.bind(this)} />
          </FormGroup>
          <FormGroup>
            <Label for="messageField">Message</Label>
            <Input type="textarea" rows="8" name="message" id="messageField" onChange={this.handleChange.bind(this)} />
          </FormGroup>
          <Button id="button">Submit</Button>
        </form>
      </div>
    )
  }
};
