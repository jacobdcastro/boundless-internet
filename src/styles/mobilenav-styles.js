import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100vh;
  background-color: blue;
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
