import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import Wrapper from '../styles/mobilenav-styles';

const MobileNav = ({
  mobileNavIsRendered,
  toggleRender,
  mobileNavIsOpening,
  toggleIsOpening,
  mobileNavIsOpen,
  toggleOpen,
  mobileNavIsClosing,
  toggleIsClosing,
  toggleInit,
  initial,
  animTime,
}) => {
  useEffect(() => {
    console.log('Rendered!!');
    toggleIsOpening((mobileNavIsOpening = true));
    console.log('Nav is moving!');

    setTimeout(() => {
      toggleIsOpening((mobileNavIsOpening = false));
      console.log(`Mobile nav is not moving anymore`);
      toggleOpen((mobileNavIsOpen = true));
      console.log(`Mobile nav is officially open!`);
    }, animTime);
  }, []);

  return (
    <Wrapper
      id="mobileNav"
      initial={initial}
      mobileNavIsOpen={mobileNavIsOpen}
      mobileNavIsOpening={mobileNavIsOpening}
      mobileNavIsRendered={mobileNavIsRendered}
      mobileNavIsClosing={mobileNavIsClosing}
      animTime={animTime}
    >
      <div className="filler" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            ><Link to="/about">About</Link>
          </li> */}
          <li>
            <Link to="footer">Contact</Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default MobileNav;
