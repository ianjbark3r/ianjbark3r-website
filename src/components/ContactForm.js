import React from 'react';
import emailjs from 'emailjs-com';

export default class contactform extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.state = {
      name: "",
      emailAddress: "",
      message: "",
      formSubmitted: false
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

  sendMessage() {
    const contactform = document.getElementById('contactform');
    contactform.submit(function(event){
    	event.preventDefault();

      // Change to your service ID, or keep using the default service
      var service_id = "mailgun";
      var template_id = "contact_form";

      contactform.find("button").text("Sending...");
      emailjs.sendForm(service_id,template_id,contactform[0])
      	.then(function(){
        	alert("Sent!");
           contactform.find("button").text("Send");
        }, function(err) {
           alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
           contactform.find("button").text("Send");
        });
      return false;
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
         <div className="col-md-6 col-sm-6 col-xs-12">
          <form id="contactform" onSubmit={this.sendMessage}>
           <div className="form-group ">
            <label className="control-label" for="name">
             Name
            </label>
            <input
              className="form-control"
              id="name"
              name="name"
              type="text"
              onChange={this.handleChange}
            />
           </div>
           <div className="form-group">
            <label className="control-label requiredField" for="email">
             Email
             <span className="asteriskField">
              *
             </span>
            </label>
            <input
              className="form-control"
              id="email"
              name="emailAddress"
              type="text"
              required="required"
              onChange={this.handleChange}
            />
           </div>
           <div className="form-group">
            <label className="control-label requiredField" for="message">
             Message
             <span className="asteriskField">
              *
             </span>
            </label>
            <textarea
              className="form-control"
              cols="40"
              id="message"
              name="message"
              rows="10"
              required="required"
              onChange={this.handleChange}
            ></textarea>
           </div>
           <div className="form-group">
            <div>
             <input
              className="btn btn-primary"
              name="submit"
              type="submit"
              value="submit"
            />
            </div>
           </div>
          </form>
         </div>
        </div>
       </div>
    )
  }
};
