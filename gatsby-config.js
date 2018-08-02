const config = require('./src/data/SiteConfig');

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    siteTitle: config.siteTitle,
    siteTitleKorean: config.siteTitleKorean,
    description: config.siteDescription,
    author: config.author,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Josefin Sans:300,300i,400,600,600i', 'Source Code Pro'],
        },

        custom: {
          families: ['Noto Sans KR'],
          urls: ['https://fonts.googleapis.com/earlyaccess/notosanskr.css'],
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: false,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600,
              backgroundColor: 'rebeccapurple',
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.google.analyticsId,
      },
    },
  ],
};
