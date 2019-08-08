import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import SiteHead from '../utils/Helmet';
import Footer from '../components/footer';

import '../utils/normalize.css';

const Layout = ({ pageData, children }) => {
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
