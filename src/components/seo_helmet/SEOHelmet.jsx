import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';

const schemaOrgJSON = [
  {
    '@context': 'http://schema.org',
    '@type': 'Blog',
    url: config.siteUrl,
    name: `${config.siteTitle} | ${config.siteTitleKorean}`,
    description: config.siteDescription,
    sameAs: [
      'https://github.com/huskyhoochu',
      'https://www.facebook.com/huskyhoochublog',
      'https://medium.com/@huskyhoochu',
    ],
    publisher: {
      '@type': 'Organization',
      name: config.siteTitle,
      logo: {
        '@type': 'ImageObject',
        url: `${config.siteUrl}/favicon_package/android-chrome-512x512.png`,
        width: 600,
        height: 60,
      },
    },
  },
];

const SEOHelmet = ({ content }) => {
  const {
    canonical, description, title, type, date, image,
  } = content;

  if (type === 'article') {
    schemaOrgJSON.push({
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      url: canonical,
      headline: title,
      description,
      author: {
        '@type': 'Person',
        name: config.author,
      },
      publisher: {
        '@type': 'Organization',
        name: config.siteTitle,
        logo: {
          '@type': 'ImageObject',
          url: `${config.siteUrl}/favicon_package/android-chrome-512x512.png`,
          width: 600,
          height: 60,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonical,
      },
      datePublished: date,
      dateModified: date,
      image: {
        '@type': 'ImageObject',
        url: `${config.siteUrl}${image}`,
      },
    });
  }

  return (
    <Helmet>
      <html lang="ko" />
      <meta
        name="google-site-verification"
        content={config.google.verificationCode}
      />
      <meta name="author" content={config.author} />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSON)}
      </script>
      <script async src={config.google.adSense.endpoint} />
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
      <meta property="og:image" content="/favicon_package/og-image.jpg" />
      <meta property="og:image:width" content="279" />
      <meta property="og:image:height" content="279" />
      <link rel="canonical" href={canonical} />
      <meta name="description" content={description} />
      <title>{title}</title>
      <meta property="og:url" content={canonical} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
    </Helmet>
  );
};

SEOHelmet.propTypes = {
  content: PropTypes.shape({
    canonical: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default SEOHelmet;
