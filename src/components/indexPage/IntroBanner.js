import React from 'react';
import Img from 'gatsby-image';
import Wrapper from '../../styles/indexPage/introBanner-styles';
import { useStaticQuery, graphql } from 'gatsby';

const IntroBanner = () => {
  const data = useStaticQuery(graphql`
    query IndexIntroBannerQuery {
      networkImg: contentfulAsset(
        id: { eq: "5fd139ae-e93d-59d5-b94f-7d7ecd5c3c7f" }
      ) {
        id
        title
        description
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }

      wifiImg: contentfulAsset(
        id: { eq: "a1589fa6-3a8b-5f5d-9783-44565eb54ca1" }
      ) {
        id
        title
        description
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }

      speedImg: contentfulAsset(
        id: { eq: "0109aa3b-89d8-5aef-b0ad-5a451fc3b0b7" }
      ) {
        id
        title
        description
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  `);

  const { networkImg, wifiImg, speedImg } = data;
  // put queried image data into array to be mapped
  const images = [networkImg, wifiImg, speedImg];

  return (
    <Wrapper>
      {images.map((img, index) => (
        <div className={`introCard ic-${index}`}>
          <Img
            classname={`ic-image`}
            fluid={img.fluid}
            title={img.title}
            alt={img.description}
          />
          <h3>{img.title}</h3>
        </div>
      ))}
    </Wrapper>
  );
};

export default IntroBanner;
