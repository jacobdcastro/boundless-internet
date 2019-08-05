import styled from 'styled-components';

const ImageWrapper = styled.section`
  font-family: 'Proxima Nova', 'Helvetica', sans-serif;
  width: 100vw;
  height: 260px;

  .holderDiv {
    position: absolute;
    height: 260px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3 {
    position: relative;
    top: 0;
    margin: 0 30px 0;
    z-index: 2;
    color: white;
  }

  .textBannerBgImage {
    z-index: 1;
    height: 100%;
  }
`;

const NoImageWrapper = styled.section`
  font-family: 'Proxima Nova', 'Helvetica', sans-serif;
  text-align: center;
  width: 80vw;
  margin: 55px auto;
`;

export { ImageWrapper, NoImageWrapper };
