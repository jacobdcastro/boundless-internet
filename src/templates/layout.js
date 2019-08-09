import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import SiteHead from '../utils/Helmet';
import Footer from '../components/footer';

import '../utils/normalize.css';

const Layout = ({ pageData, children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line global-require
      require('smooth-scroll')('a[href*="#"]');
    }
  });

  return (
    <div
      style={{
        backgroundColor: '#dbdbdb',
        margin: '0',
      }}
    >
      <SiteHead />
      <Header headerData={pageData.pageHeader} />

      <main
        style={{
          position: 'relative',
          display: 'inline-block',
          zIndex: '2',
          width: '100%',
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
