import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  background-color: blue;
  animation: ${props =>
    !props.mobileNavIsOpen
      ? `slideOut ${props.animTime}`
      : `slideIn ${props.animTime}`};

  @keyframes slideIn {
    from {
      transform: translateX(100vw);
    }
  }
  @keyframes slideOut {
    from {
      transform: translateX(-100vw);
    }
  }
`;

export default Wrapper;
