import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';

// CSS
import './Layout.css';

// Components
import SideMenu from '../side_menu/SideMenu';
import Header from '../header/Header';
import GreyOut from '../grey_out/GreyOut';

const Layout = ({ children }) => (
  <div className="App">
    <Helmet>
      <html lang="ko" />
      <link rel="canonical" href={config.siteUrl} />
      <meta name="description" content={config.siteDescription} />
    </Helmet>
    <div className="canvas">
      <SideMenu />
      <Header />
      <div className="grid-wrapper">{children}</div>
      <GreyOut />
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Layout;
