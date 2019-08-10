import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100vh;
  background-color: #272838;
  ${props => {
    if (!props.mobileNavIsOpen && !props.initial) {
      return `animation: slideOut ${props.animTime}ms`;
    } else if (props.initial && props.mobileNavIsRendered) {
      return `animation: slideIn ${props.animTime}ms`;
    }
  }}
  /* animation: ${props => {
    if (props.mobileNavIsOpening) {
      return `slideOut ${props.animTime}ms`;
    } else if (props.mobileNavIsClosing) {
      return `slideIn ${props.animTime}ms`;
    }
  }}; */

  .filler {
    height: 80px;
    width: 100%;
    position: relative;
    background: white;
  }

  nav {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;

    ul {
      margin: 0;
      padding: 0;
      text-align: center;

      li {
        list-style-type: none;
        padding: 0;
        margin: 15px;
      
        a {
          font-size: 2rem;
          font-weight: 600;
          color: white;
          text-decoration: none;
          letter-spacing: .8px;
          text-align: center;
        }
      }
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(100vw);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes slideOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100vw);
    }
  }
`;

export default Wrapper;
