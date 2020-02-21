import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import MobileNav from './MobileNav';

// CSS-IN-JS styled-components
import Wrapper from '../styles/header-styles';
import '../utils/hamburgers.css';

const Header = ({ headerData }) => {
  let [mobileNavIsRendered, toggleRender] = useState(false);
  let [mobileNavIsOpening, toggleIsOpening] = useState(false);
  let [mobileNavIsOpen, toggleOpen] = useState(false);
  let [initial, toggleInit] = useState(true);

  const animTime = 1050;

  const data = useStaticQuery(graphql`
    query HeaderLogoQuery {
      contentfulAsset(id: { eq: "b074e439-71f7-5609-9815-6098f557cdc2" }) {
        id
        title
        description
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  `);

  const openMobileNav = () => {
    toggleInit((initial = true));
    toggleRender((mobileNavIsRendered = true));
    // rest of render function in MobileNav.js in useEffect().
  };

  const closeMobileNav = () => {
    toggleInit((initial = false));
    toggleOpen((mobileNavIsOpen = false));
    console.log(`Mobile nav now closing`);
    setTimeout(() => {
      console.log(`Mobile nav is closed!`);
      toggleRender((mobileNavIsRendered = false));
      console.log(`Now UNrendered!!!`);
    }, animTime);
  };

  return (
    <Wrapper>
      <Img
        className="headerImage"
        fluid={headerData.backgroundImage.fluid}
        alt={headerData.description}
      />

      {mobileNavIsRendered && (
        <MobileNav
          animTime={animTime}
          initial={initial}
          toggleInit={toggleInit}
          mobileNavIsRendered={mobileNavIsRendered}
          toggleRender={toggleRender}
          toggleIsOpening={toggleIsOpening}
          mobileNavIsOpen={mobileNavIsOpen}
          toggleOpen={toggleOpen}
        />
      )}

      <div className="headerContainer">
        <nav>
          <Link to="/">
            <Img
              imgStyle={{
                width: '100%',
                height: '100%',
              }}
              className="headerLogo"
              fluid={data.contentfulAsset.fluid}
              alt={data.contentfulAsset.description}
            />
          </Link>

          <ul id="fullNav">
            <li className="fullNavItem">
              <Link to="/services">Services</Link>
            </li>
            <li className="fullNavItem">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <button
            id="hamburger"
            className={`hamburger hamburger--spin-r${(mobileNavIsOpening ||
              mobileNavIsOpen) &&
              ` is-active`}`}
            onClick={() => {
              if (mobileNavIsOpen) {
                closeMobileNav();
              } else {
                openMobileNav();
              }
            }}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </nav>

        {headerData.isHomePage ? (
          <div className="index__headerContentSection">
            <h2>{headerData.headline}</h2>
            <a href="#footer">GET STARTED</a>
          </div>
        ) : (
          <div className="headerContentSection">
            <h2>{headerData.headline}</h2>
            {headerData.subheadline && <h3>{headerData.subheadline}</h3>}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Header;
