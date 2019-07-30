import styled from 'styled-components';

//? HEADER Wrapper FOR LAYOUT
const Wrapper = styled.header`
  display: block;
  position: fixed;
  width: 100vw;
  height: 400px;

  /* :before,
  :after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    width: 50%;
    border-bottom: 20px solid white;
  }

  :before {
    left: 0;
    border-right: 20px solid transparent;
  }

  :after {
    right: 0;
    border-left: 20px solid transparent;
  } */

  .headerImage {
    position: absolute;
    top: 0;
    width: auto;
    height: 100%;
    margin: 0;
    z-index: 1;
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

  .headerContentSection {
    margin: 100px;
    position: relative;
    z-index: 2;
  }
`;

export default Wrapper;
