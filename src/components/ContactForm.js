import React from 'react';
import { Button, FormGroup, Label, Input, } from 'reactstrap';
import { Message } from '../Styles';

export default class contactform extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      emailAddress: "",
      message: "",
      submitted: false
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
    this.setState({
      submitted: true
    });
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
    if (!this.state.submitted) {
    return (
      <form 
        id="myform" 
        style={{ 
          fontFamily: "'Roboto', sans-serif", 
          paddingBottom: "5vh" 
        }} 
        onSubmit={this.handleSubmit.bind(this)}
      >
        <FormGroup>
          <Label for="nameField">Name</Label>
          <Input 
            type="name" 
            name="name" 
            id="nameField" 
            placeholder="Your name" 
            onChange={this.handleChange.bind(this)} 
          />
        </FormGroup>
        <FormGroup>
          <Label for="emailField">Email</Label>
          <Input 
            type="email" 
            name="emailAddress" 
            id="emailField" 
            placeholder="Your email" 
            onChange={this.handleChange.bind(this)} 
          />
        </FormGroup>
        <FormGroup>
          <Label for="messageField">Message</Label>
          <Input 
            type="textarea" 
            rows="8" 
            name="message" 
            id="messageField" 
            onChange={this.handleChange.bind(this)} 
          />
        </FormGroup>
        <Button id="button">Submit</Button>
      </form>
      )
    } else {
      return (
        <div className="container">
          <Message>Thank you for your message!</Message>
        </div>
      )
    }
  }
};
