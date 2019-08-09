import styled from 'styled-components';

//? HEADER Wrapper for LAYOUT
const Wrapper = styled.header`
  font-family: 'Proxima Nova', 'Helvetica', sans-serif;
  display: block;
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  padding: 0 0 25px;
  z-index: 5;

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
    width: 100%;
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

  .headerLogo {
    margin-left: 10px;
    width: 220px;
    height: 100px;
    max-width: 145px;
  }

  #hamburger {
    margin-right: 20px;
  }

  #fullNav {
    display: none;
  }

  /* index header styles */
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
      max-width: 545px;
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

  /* non-index header styles */
  .headerContentSection {
  }

  @media (min-width: 450px) {
    height: 480px;
    .index__headerContentSection {
      margin: 120px auto 75px;
      width: 75%;
    }
  }

  @media (min-width: 600px) {
    height: 500px;

    &::before {
      width: 46vw;
      border-bottom: 40px solid #dbdbdb;
      border-right: 50px solid transparent;
    }
    &::after {
      width: 46vw;
      border-bottom: 40px solid #dbdbdb;
      border-left: 50px solid transparent;
    }

    nav {
      max-width: 1166px;
    }

    #hamburger {
      display: none;
    }
    #fullNav {
      display: flex;
      width: 320px;
      justify-content: space-between;
      margin-right: 35px;
    }

    .fullNavItem {
      list-style-type: none;

      a {
        padding: 4px 2px;
        border-bottom: 3px solid transparent;
        font-size: 1.3rem;
        letter-spacing: 0.6px;
        color: white;
        text-decoration: none;
        transition: 0.25s;
      }
      a:hover {
        text-shadow: 1px 3px 5px #3c3c3c;
      }
    }

    .index__headerContentSection {
      width: 65%;
      max-width: 800px;
      margin-top: 140px;

      h2 {
        font-size: 1.7rem;
      }

      a {
        letter-spacing: 1.5px;
        padding: 15px 25px;
        border-radius: 7px;
      }
    }
  }

  @media (min-width: 1100px) {
    height: 575px;

    .index__headerContentSection {
      margin-top: 180px;

      h2 {
        font-size: 1.8rem;
      }

      a {
        transform: scale(1.3);
      }
    }
  }

  @media (min-width: 1400px) {
    &::before {
      width: 47vw;
      border-bottom: 50px solid #dbdbdb;
      border-right: 50px solid transparent;
    }
    &::after {
      width: 47vw;
      border-bottom: 50px solid #dbdbdb;
      border-left: 50px solid transparent;
    }
  }
`;

export default Wrapper;
