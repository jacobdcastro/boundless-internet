import styled from 'styled-components';

// styles for banners with background image
const ImageWrapper = styled.section`
  font-family: 'Proxima Nova', 'Helvetica', sans-serif;
  width: 100%;
  height: 260px;

  .holderDiv {
    position: absolute;
    height: 260px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0);
  }

  h3 {
    position: relative;
    top: 0;
    margin: 0 30px 0;
    z-index: 2;
    color: white;
    text-shadow: 0 5px 5px black;
  }

  .textBannerBgImage {
    z-index: 1;
    height: 100%;
  }

  @media (min-width: 450px) {
    h3 {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 800px) {
    height: 320px;

    .holderDiv {
      height: 320px;
    }

    h3 {
      margin-left: -30px;
      font-size: 1.62rem;
      width: 600px;
    }
  }
`;

// ? ====================================================================
// ? =============== IMAGE WRAPPER DOCUMENT BREAK =======================
// ? ====================================================================

// styles for banners without backgorund image
const NoImageWrapper = styled.section`
  font-family: 'Proxima Nova', 'Helvetica', sans-serif;
  text-align: center;
  width: 80vw;
  margin: 55px auto;
  color: #444;

  .holderDiv {
    text-align: center;
  }

  h3 {
    max-width: 480px;
    margin: auto;
    width: 85%;
    font-size: 1.3rem;
  }

  @media (min-width: 450px) {
    h3 {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 800px) {
    max-width: 800px;
    h3 {
      font-size: 1.7rem;
      max-width: 600px;
    }
  }
`;

export { ImageWrapper, NoImageWrapper };
