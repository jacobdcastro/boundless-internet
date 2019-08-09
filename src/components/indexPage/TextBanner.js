import React from 'react';
import Img from 'gatsby-image';
import {
  ImageWrapper,
  NoImageWrapper,
} from '../../styles/indexPage/textbanner-styles';

const TextBanner = ({ bannerData }) => {
  const { text, backgroundImage, title, description } = bannerData;
  if (backgroundImage) {
    return (
      <ImageWrapper className="textBanner">
        <div className="holderDiv">
          <h3>{text.text}</h3>
        </div>
        <Img
          style={{
            objectFit: 'cover',
            height: '100%',
          }}
          className="textBannerBgImg"
          title={title}
          alt={description}
          fluid={backgroundImage.fluid}
        />
      </ImageWrapper>
    );
  } else {
    return (
      <NoImageWrapper className="textBanner">
        <div className="holderDiv">
          <h3>{text.text}</h3>
        </div>
      </NoImageWrapper>
    );
  }
};

export default TextBanner;
