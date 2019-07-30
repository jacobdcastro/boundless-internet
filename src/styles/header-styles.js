import styled from 'styled-components';

//? HEADER Wrapper for LAYOUT
const Wrapper = styled.header`
  font-family: 'Proxima Nova', 'Helvetica', sans-serif;
  display: block;
  position: relative;
  width: 100vw;
  height: 400px;
  overflow: hidden;
  padding: 0 0 25px;
  z-index: 1;

  &::before {
    left: 0;
    bottom: 0;
    content: '';
    width: 43vw;
    position: absolute;
    z-index: 1;
    border-bottom: 40px solid #dbdbdb;
    border-right: 50px solid transparent;
  }
  &::after {
    bottom: 0;
    right: 0;
    content: '';
    width: 43vw;
    z-index: 1;
    position: absolute;
    border-bottom: 40px solid #dbdbdb;
    border-left: 50px solid transparent;
  }

  .headerImage {
    position: absolute;
    top: 0;
    width: auto;
    height: 120%;
    margin: 0;
    z-index: 0;
  }

  .headerContainer {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    height: 100%;
    width: 100vw;
  }

  nav {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 10px 15px 0;
    /* margin: 10px; */
    z-index: 5;
  }

  #fullNav {
    display: none;
  }

  .index__headerContentSection {
    margin: 100px;
    position: relative;
    z-index: 2;
    width: 75%;

    h2 {
      padding-left: -25px;
      color: white;
      font-size: 5vw;
      margin-bottom: 35px;
      letter-spacing: 1px;
    }

    a {
      background-color: #0678d8;
      font-weight: bold;
      letter-spacing: 1.5px;
      color: white;
      text-transform: capitalize;
      text-decoration: none;
      padding: 15px 25px;
      border-radius: 7px;
    }
  }
`;

export default Wrapper;
