import React from 'react';
import { Link } from 'gatsby';

// styled-components
import Container from '../styles/header';

const Header = ({ siteTitle }) => (
  <Container>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </Container>
);

export default Header;
