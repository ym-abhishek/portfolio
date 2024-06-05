import "./contact.css";
import React from "react";

export default function Contact() {
  return (
    <>
      <div className="contact-con">
        <div className="contact-form">
          <h1>Contact</h1>
          <form>
            <input type="text" placeholder="Name*" />
            <input type="tel" placeholder="Phone*" />
            <input type="email" placeholder="email*" />
            <textarea type="text" placeholder="Message" />
          </form>
          <button type="submit">Submit</button>
          <div className="foot_icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-x-twitter" />
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-google" />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

