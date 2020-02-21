import React from 'react';
import Img from 'gatsby-image';
import Wrapper from '../../styles/servicesPage/imageWithParagraph-styles';

const ImageWithParagraph = props => {
  const { shortID, title, description, imgOnLeft, image } = props.data;
  return (
    <Wrapper id={shortID && shortID} left={imgOnLeft}>
      <div className="container">
        <Img
          fluid={image.fluid}
          title={image.title}
          alt={image.description}
          className="image"
          imgStyle={{ height: '100%' }}
        />
        <div>
          <h3>{title}</h3>
          <p>{description.description}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default ImageWithParagraph;
