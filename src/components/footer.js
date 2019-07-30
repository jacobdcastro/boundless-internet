import React from 'react';
import Wrapper from '../styles/footer-styles';

const Footer = () => {
  // form submission w/ zapier or excel or other google api?
  const _handleSubmit = e => {
    e.preventDefault();
    console.log('form pretend submitted');
  };

  return (
    <Wrapper>
      <div className="contactSection">
        <form id="contact" onSubmit={_handleSubmit}>
          <legend>Contact Us!</legend>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="tel" placeholder="Phone Number" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Business (optional)" />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="linkSection">
        <ul className="socialLinks"></ul>
        <ul className="footerNav"></ul>
      </div>

      <p>&copy;2019 - Boundless Communications</p>
    </Wrapper>
  );
};

export default Footer;
