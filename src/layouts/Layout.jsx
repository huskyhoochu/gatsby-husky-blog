import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '../data/SiteConfig';

// Styled
import Styled from './StyledLayout';

// Components
import Header from '../components/header/Header';
import SideMenu from '../components/side_menu/SideMenu';
import GreyOut from '../components/grey_out/GreyOut';
import FlexWrapper from '../components/flex_wrapper/FlexWrapper';

const Layout = ({ children, query }) => {
  const schemaOrgJSON = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: config.siteUrl,
      name: config.siteTitle,
    },
  ];

  return (
    <Styled.App>
      <Helmet>
        <html lang="ko" />
        <meta
          name="google-site-verification"
          content={config.googleVerificationCode}
        />
        <meta name="author" content={config.author} />
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSON)}
        </script>
      </Helmet>
      <Styled.Canvas>
        <SideMenu />
        <Header />
        <FlexWrapper query={query} />
        {children}
        <GreyOut />
      </Styled.Canvas>
    </Styled.App>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  query: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

export default Layout;
