import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import Form from "react";
import { MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";
import WhatsApp from './WhatsApp'


export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "test_12",
        ".contact_form_class",
        "user_Qm54oNqEM3zv0AXKHKvQS"
      )
      .then()
      .catch();
    this.setState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  handleChange = (param, e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  render() {
    return (
      <div>
        <section className="page-section" id="contact">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">
                Have any query...contact us
              </h3>
            </div>
            
            <form
              id="contactForm"
              ref="contactref"
              name="sentMessage"
              noValidate="novalidate"
              onSubmit={this.handleSubmit.bind(this)}
              className="contact_form_class"
            >
              <MDBRow>
              <MDBCol lg="12" className="lg-0 mb-4">
              <div className="row align-items-stretch mb-5">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name *"
                      required="required"
                      value={this.state.name}
                      onChange={this.handleChange.bind("name", this)}
                      data-validation-required-message="Please enter your name."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      required="required"
                      value={this.state.email}
                      onChange={this.handleChange.bind("email", this)}
                      data-validation-required-message="Please enter your email address."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group mb-md-0">
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Your Phone *"
                      required="required"
                      value={this.state.phone}
                      onChange={this.handleChange.bind("phone", this)}
                      data-validation-required-message="Please enter your phone number."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group form-group-textarea mb-md-0">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Your Message *"
                      required="required"
                      value={this.state.message}
                      onChange={this.handleChange.bind("message", this)}
                      data-validation-required-message="Please enter a message."
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div id="success"></div>
                <button
                  className="btn btn-primary btn-xl text-uppercase"
                  id="sendMessageButton"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
              </MDBCol>
              </MDBRow>
            </form>
            
          </div>
          <WhatsApp />
        </section>
       
      </div>
    );
  }
}

export default Contact;
