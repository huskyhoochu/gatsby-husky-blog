/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';

// Styled
import Styled from './StyledLayout';

// Components
import SideMenu from '../side_menu/SideMenu';
import Header from '../header/Header';
import GreyOut from '../grey_out/GreyOut';

class Layout extends React.Component {
  componentDidMount() {
    const webFontConfig = {
      google: {
        families: ['Josefin Sans:300,300i,400,600,600i', 'Source Code Pro'],
      },

      custom: {
        families: ['Noto Sans KR'],
        urls: ['https://fonts.googleapis.com/earlyaccess/notosanskr.css'],
      },
    };

    try {
      const WebFont = require('webfontloader');
      WebFont.load(webFontConfig);
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { children } = this.props;
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
  }
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Layout;
