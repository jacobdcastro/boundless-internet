import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import SiteHead from '../utils/Helmet';
import Footer from '../components/Footer';

import '../utils/normalize.css';

const Layout = ({ pageData, children }) => {
  return (
    <div
      style={{
        backgroundColor: '#dbdbdb',
      }}
    >
      <SiteHead />
      <Header headerData={pageData.pageHeader} />

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
