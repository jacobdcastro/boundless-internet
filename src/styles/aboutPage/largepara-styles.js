import styled from 'styled-components';

const Wrapper = styled.section`
  font-family: 'Proxima Nova', 'Helvetica', sans-serif;

  .container {
    width: 85%;
    margin: 0 auto 45px;

    h2 {
      font-size: 1.9rem;
      margin-top: 0;
    }

    p {
      font-size: 1.14rem;
      letter-spacing: 0.7px;
      line-height: 1.3rem;
    }
  }

  @media (min-width: 450px) {
    .container {
      width: 70%;
      margin: 0 auto 60px;
    }
  }

  @media (min-width: 600px) {
    .container {
      p {
        font-size: 1.3rem;
        line-height: 1.6rem;
      }
    }
  }

  @media (min-width: 1000px) {
    /* width: 790px; */
    margin: auto;

    .container {
      width: 750px;

      h2 {
        font-size: 2.3rem;
      }

      p {
        line-height: 1.6rem;
      }
    }
  }
`;

export default Wrapper;
