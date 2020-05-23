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
        "user_ZMiLiuSParmQWHoVmVfca"
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
              <MDBCol lg="7" className="lg-0 mb-4">
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
              <MDBCol lg="5">

              <div
          id="map-container"
          className="rounded z-depth-1-half map-container"
          style={{ height: "400px"}}
        >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7034972755846!2d77.45450386508205!3d28.608670532427322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5b30766f1857ec32!2sAjnara%20Le%20Garden%20-%20Q!5e0!3m2!1sen!2sin!4v1590005731698!5m2!1sen!2sin" 
title="testing"
width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 1 }} />

        </div>
        <br />
        <MDBRow className="text-center">
          <MDBCol md="4">
            <MDBBtn tag="a" floating color="blue" className="accent-1">
              <MDBIcon icon="map-marker-alt" />
            </MDBBtn>
            <p style={{color: 'red'}}>New York, 94126</p>
            <p className="mb-md-0" floating color="blue" style={{color: 'red'}}>United States</p>
          </MDBCol>
          <MDBCol md="4">
            <MDBBtn tag="a" floating color="blue" className="accent-1">
              <MDBIcon icon="phone" />
            </MDBBtn>
            <p style={{color: 'red'}}>+ 01 234 567 89</p>
            <p className="mb-md-0" style={{color: 'red'}}>Mon - Fri, 8:00-22:00</p>
          </MDBCol>
          <MDBCol md="4">
            <MDBBtn tag="a" floating color="blue" className="accent-1">
              <MDBIcon icon="envelope" />
            </MDBBtn>
            <p style={{color: 'red'}}>info@gmail.com</p>
            <p className="mb-md-0" style={{color: 'red'}}>sale@gmail.com</p>
          </MDBCol>
        </MDBRow>
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
