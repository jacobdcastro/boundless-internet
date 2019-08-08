import styled from 'styled-components';

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
`;

// ? ====================================================================
// ? =============== IMAGE WRAPPER DOCUMENT BREAK =======================
// ? ====================================================================

const NoImageWrapper = styled.section`
  font-family: 'Proxima Nova', 'Helvetica', sans-serif;
  text-align: center;
  width: 80vw;
  margin: 55px auto;
`;

export { ImageWrapper, NoImageWrapper };
