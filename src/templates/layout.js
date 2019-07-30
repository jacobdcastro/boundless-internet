import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Footer from '../components/footer';
import SiteHead from '../utils/Helmet';

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
