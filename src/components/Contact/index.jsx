import React from "react";
import Header from "../Header";
import "./index.css";

const Contact = () => {
  return (
    <>
      <Header title="Contact" />
      <div id="contact">
        <div className="contact-item">
          <a href="mailto:sarah.drew.dev@gmail.com">
            <img src="images/email.svg" alt="" />
            <p>Email me</p>
          </a>
        </div>
        <div className="contact-item">
          <a href="https://www.linkedin.com/in/sarah-drew-dev/">
            <img src="images/linkedin-logo.svg" alt="" />
            <p>Connect with me</p>
          </a>
        </div>
        <div className="contact-item">
          <a href="https://github.com/sdrew712">
            <img src="images/github-logo.svg" alt="" />
            <p>See all my code</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
