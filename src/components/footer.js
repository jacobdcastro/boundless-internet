import React from 'react';
import Wrapper from '../styles/footer-styles';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      facebook: contentfulAsset(
        id: { eq: "270efd2a-e156-5e73-9177-005d569dc083" }
      ) {
        id
        title
        description
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
      }

      instagram: contentfulAsset(
        id: { eq: "602d6c8c-b2ef-5484-8613-b32404b1d39c" }
      ) {
        id
        title
        description
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
      }

      linkedin: contentfulAsset(
        id: { eq: "0d0147ac-ab7c-5695-b123-642149e18f5d" }
      ) {
        id
        title
        description
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
      }

      twitter: contentfulAsset(
        id: { eq: "8363c9b2-36c6-501e-b9c8-fd275c6cfb33" }
      ) {
        id
        title
        description
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  `);
  // deconstruct queries for simpler syntax
  const { facebook, instagram, linkedin, twitter } = data;

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
        <div className="socialLinks">
          <a href="#" className="socialIcon">
            <Img
              fluid={facebook.fluid}
              title={facebook.title}
              alt={facebook.description}
            />
          </a>
          <a href="#" className="socialIcon">
            <Img
              fluid={instagram.fluid}
              title={instagram.title}
              alt={instagram.description}
            />
          </a>
          <a href="#" className="socialIcon">
            <Img
              fluid={twitter.fluid}
              title={twitter.title}
              alt={twitter.description}
            />
          </a>
          <a href="#" className="socialIcon">
            <Img
              fluid={linkedin.fluid}
              title={linkedin.title}
              alt={linkedin.description}
            />
          </a>
        </div>
        <ul className="footerNav"></ul>
      </div>

      <p>&copy;2019 - Boundless Communications</p>
    </Wrapper>
  );
};

export default Footer;
