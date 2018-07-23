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
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600,
              withWebp: true,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
  ],
};
