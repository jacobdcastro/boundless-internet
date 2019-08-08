import styled from 'styled-components';

// ? INTRO BANNER wrapper for INDEX
const Wrapper = styled.div`
  background-color: #dbdbdb;
  width: 100%;
  margin: 0;
  padding: 15px 0;
  .container {
    margin: 15px auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .introCard {
    width: 60vw;
    margin-bottom: 40px;
    padding: 15px;
    /* background-color: #d4d4d4; */
  }

  .ic-image {
    width: 12%;
  }

  h3 {
    color: #5b5b5b;
    margin: 30px 0 0;
    font-family: 'Proxima Nova', 'Helvetica', sans-serif;
    font-weight: 800;
    letter-spacing: 1px;
    font-size: 1.35rem;
    text-align: center;
    text-transform: uppercase;
  }

  @media (min-width: 450px) {
    .container {
      flex-direction: row;
      justify-content: space-evenly;
      max-width: 800px;
      width: 90%;
    }

    .introCard {
      width: 20vw;
      height: auto;
      max-width: 165px;
    }

    h3 {
      font-size: 2.5vw;
    }
  }

  @media (min-width: 1000px) {
    h3 {
      font-size: 1.5rem;
    }
  }
`;

export default Wrapper;
