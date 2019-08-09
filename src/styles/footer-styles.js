import styled from 'styled-components';

// ? FOOTER wrapper for LAYOUT
const Wrapper = styled.div`
  font-family: 'Proxima Nova', 'Helvetica', sans-serif;
  background-color: #272838;
  width: 100%;
  margin: 0;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  .contactSection {
    max-width: 415px;
    width: 75vw;
    margin: 15px auto;
  }

  #contact {
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    legend {
      font-weight: 700;
      font-size: 1.5rem;
      letter-spacing: 1px;
      margin: 10px auto;
      text-align: center;
    }
    input {
      padding: 8px;
      margin-bottom: 13px;
      border-radius: 4px;
      border: none;
      transition: 0.2s;
    }
    input:focus {
      box-shadow: inset 0 0 10px #0678d8;
    }
    /* input:invalid {
      box-shadow: inset 0 0 10px #ef476f;
    } */
    /* input:valid {
      box-shadow: inset 0 0 10px green;
    } */
    button {
      padding: 10px;
      background-color: #ef476f;
      border: none;
      border-radius: 4px;
      font-size: 1.1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 800;
      color: #272838;
    }
    button:hover {
      cursor: pointer;
    }
  }
  .linkSection {
    width: 100%;
  }
  .socialLinks {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 15px auto;
    max-width: 415px;
  }
  .socialIcon {
    /* display: inline; */
    width: 50px;
    height: auto;
    transition: 0.5s;
  }
  .socialIcon:hover {
    transform: (translateY(15px));
  }
`;

export default Wrapper;
