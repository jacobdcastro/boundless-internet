import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 20px 10px 35px;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    max-width: 500px;
    margin: auto;
    text-align: center;

    .image {
      height: 200px;
      width: 200px;
      margin: 0 auto;
    }

    h3,
    p {
      font-family: 'Proxima Nova', 'Helvetica', sans-serif;
    }

    h3 {
      font-size: 1.7rem;
      margin-bottom: 5px;
    }
    p {
      margin-top: 7px;
      line-height: 1.2rem;
      letter-spacing: 0.3px;
    }
  }

  @media (min-width: 900px) {
    .container {
      flex-direction: ${props => (props.left ? 'row' : 'row-reverse')};
      width: 100%;
      justify-content: space-between;
      align-items: center;
      max-width: 1000px;
      margin: 70px auto;

      .image {
        width: 200px;
      }

      div {
        margin: 0 ${props => (!props.left ? '30px 0 0' : '0 0 30px')}
        width: 70%;
        p,
        h3 {
          text-align: left;
        }

        h3 {
          font-size: 2.2rem;
          margin-bottom: 15px;
        }
        p {
          font-size: 1.075rem;
        }
      }
    }
  }
`;

export default Wrapper;
