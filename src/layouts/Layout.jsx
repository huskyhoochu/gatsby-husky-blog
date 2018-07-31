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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_package/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_package/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon_package/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_package/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_package/site.webmanifest.json" />
        <link
          rel="mask-icon"
          href="/favicon_package/safari-pinned-tab.svg"
          color="#663399"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicon_package/mstile-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta
          property="og:image"
          content="/favicon_package/android-chrome-512x512.png"
        />
        <meta property="og:image:width" content="280" />
        <meta property="og:image:height" content="280" />
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
