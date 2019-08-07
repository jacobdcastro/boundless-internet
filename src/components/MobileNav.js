import React, { useState, useEffect } from 'react';
import Wrapper from '../styles/mobilenav-styles';

const MobileNav = ({ mobileNavIsRendered, toggleRender, animTime }) => {
  let [mobileNavIsMoving, toggleIsMoving] = useState(false);
  let [mobileNavIsOpen, toggleOpen] = useState(false);

  useEffect(() => {
    console.log('Rendered!!');
    toggleIsMoving((mobileNavIsMoving = !mobileNavIsMoving));

    return () => {
      console.log('UNrendered!!');
    };
  }, []);

  return (
    <Wrapper
      id="mobileNav"
      mobileNavIsOpen={mobileNavIsOpen}
      animTime={animTime}
    >
      <div className="filler" />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default MobileNav;
