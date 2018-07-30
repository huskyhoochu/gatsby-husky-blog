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

const Layout = ({ children }) => {
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
        <Styled.FlexWrapper>{children}</Styled.FlexWrapper>
        <GreyOut />
      </Styled.Canvas>
    </Styled.App>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Layout;
