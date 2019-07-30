import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import SiteHead from '../utils/Helmet';

import '../utils/normalize.css';

const Layout = ({ data }) => {
  return (
    <div>
      <SiteHead />
      <Header headerData={data} />

      {/* <main>{children}</main> */}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
