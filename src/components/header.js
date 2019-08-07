import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import MobileNav from './MobileNav';

// CSS-IN-JS styled-components
import Wrapper from '../styles/header-styles';
import '../utils/hamburgers.css';

const Header = ({ headerData }) => {
  let [mobileNavIsRendered, toggleRender] = useState(false);

  const animTime = '0.6s';

  const data = useStaticQuery(graphql`
    query HeaderLogoQuery {
      contentfulAsset(id: { eq: "c5119d81-21d5-5d89-bf6d-761c701f0e9e" }) {
        id
        title
        description
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  `);

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
          mobileNavIsRendered={mobileNavIsRendered}
          toggleRender={toggleRender}
        />
      )}

      <div className="headerContainer">
        <nav>
          <Link to="/">
            <Img
              style={{
                width: '35vw',
                height: 'auto',
              }}
              className="headerLogo"
              fluid={data.contentfulAsset.fluid}
              alt={data.contentfulAsset.description}
            />
          </Link>

          {/* <ul id="fullNav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul> */}

          <button
            id="hamburger"
            className={`hamburger hamburger--spin-r${mobileNavIsRendered &&
              ` is-active`}`}
            onClick={() =>
              toggleRender((mobileNavIsRendered = !mobileNavIsRendered))
            }
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
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Header;
