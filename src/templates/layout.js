import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import SiteHead from '../utils/Helmet';
import IntroBanner from '../components/indexPage/IntroBanner';
import Banner1 from '../components/indexPage/Banner1';
import Footer from '../components/footer';

import '../utils/normalize.css';

const Layout = ({ data, children }) => {
  return (
    <div
      style={{
        backgroundColor: '#dbdbdb',
      }}
    >
      <SiteHead />
      <Header headerData={data} />

      <main
        style={{
          position: 'relative',
          display: 'inline-block',
          zIndex: '2',
        }}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
