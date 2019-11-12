import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import Wrapper from '../styles/footer-styles';

const Footer = () => {
  // TODO uncomment hook to use social media links
  // const data = useStaticQuery(graphql`
  //   query FooterQuery {
  //     facebook: contentfulAsset(
  //       id: { eq: "270efd2a-e156-5e73-9177-005d569dc083" }
  //     ) {
  //       id
  //       title
  //       description
  //       fluid(quality: 100) {
  //         ...GatsbyContentfulFluid_withWebp
  //       }
  //     }

  //     instagram: contentfulAsset(
  //       id: { eq: "602d6c8c-b2ef-5484-8613-b32404b1d39c" }
  //     ) {
  //       id
  //       title
  //       description
  //       fluid(quality: 100) {
  //         ...GatsbyContentfulFluid_withWebp
  //       }
  //     }

  //     linkedin: contentfulAsset(
  //       id: { eq: "0d0147ac-ab7c-5695-b123-642149e18f5d" }
  //     ) {
  //       id
  //       title
  //       description
  //       fluid(quality: 100) {
  //         ...GatsbyContentfulFluid_withWebp
  //       }
  //     }

  //     twitter: contentfulAsset(
  //       id: { eq: "8363c9b2-36c6-501e-b9c8-fd275c6cfb33" }
  //     ) {
  //       id
  //       title
  //       description
  //       fluid(quality: 100) {
  //         ...GatsbyContentfulFluid_withWebp
  //       }
  //     }
  //   }
  // `);
  // deconstruct queries for simpler syntax
  // const { facebook, instagram, linkedin, twitter } = data;

  return (
    <Wrapper id="footer">
      <div className="contactSection">
        <form
          id="contact"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {/* hidden field for Netlify bots */}
          <input type="hidden" name="form-name" value="contact" />

          <legend>GET STARTED</legend>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            placeholder="Full Name*"
            name="Full Name"
            required
          />
          <label htmlFor="phoneNumber">Full Name</label>
          <input
            id="phoneNumber"
            type="tel"
            placeholder="Phone Number*"
            name="Phone number"
            required
          />
          <label htmlFor="email">Full Name</label>
          <input
            id="email"
            type="email"
            placeholder="Email*"
            name="Email"
            required
          />
          <label htmlFor="business">Full Name</label>
          <input
            id="business"
            type="text"
            placeholder="Business (optional)"
            name="Business"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      {/* 
      <div className="linkSection">
        <div className="socialLinks">
          <a href="https://facebook.com/" className="socialIcon">
            <Img
              fluid={facebook.fluid}
              title={facebook.title}
              alt={facebook.description}
            />
          </a>
          <a href="https://instagram.com/" className="socialIcon">
            <Img
              fluid={instagram.fluid}
              title={instagram.title}
              alt={instagram.description}
            />
          </a>
          <a href="https://twitter.com/" className="socialIcon">
            <Img
              fluid={twitter.fluid}
              title={twitter.title}
              alt={twitter.description}
            />
          </a>
          <a href="https://linkedin.com/" className="socialIcon">
            <Img
              fluid={linkedin.fluid}
              title={linkedin.title}
              alt={linkedin.description}
            />
          </a>
        </div>
        <ul className="footerNav"></ul>
      </div> */}

      <p>&copy;2019 - Boundless Communications</p>
    </Wrapper>
  );
};

export default Footer;
