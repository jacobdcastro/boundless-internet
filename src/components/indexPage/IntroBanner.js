import React from 'react';
import Img from 'gatsby-image';
import Wrapper from '../../styles/indexPage/introBanner-styles';
import { useStaticQuery, graphql, Link } from 'gatsby';

const IntroBanner = () => {
  const data = useStaticQuery(graphql`
    query IndexIntroBannerQuery {
      networkImg: contentfulAsset(
        id: { eq: "9a036783-a1f6-581b-9175-9b432ab554e1" }
      ) {
        id
        title
        description
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }

      wifiImg: contentfulAsset(
        id: { eq: "e59608a0-b682-50cc-afc6-a32bf00ab3d0" }
      ) {
        id
        title
        description
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }

      speedImg: contentfulAsset(
        id: { eq: "37ed7f11-bb26-5a50-a870-f89efedcd1d8" }
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
  networkImg.shortID = 'surveillance';
  wifiImg.shortID = 'wifi';
  speedImg.shortID = 'internet';
  // put queried image data into array to be mapped
  const images = [networkImg, wifiImg, speedImg];

  return (
    <Wrapper>
      <div className="container">
        {images.map((img, index) => (
          <Link to={`/services#${img.shortID}`}>
            <div key={index} className={`introCard ic-${index}`}>
              <Img
                classname={`ic-image`}
                fluid={img.fluid}
                title={img.title}
                alt={img.description}
              />
              <h3>{img.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </Wrapper>
  );
};

export default IntroBanner;
