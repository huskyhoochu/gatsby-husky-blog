const autoprefixer = require('autoprefixer');
const config = require('./src/data/SiteConfig');

module.exports = {
  siteMetadata: {
    site_url: config.siteUrl,
    title: config.siteTitle,
    description: config.siteDescription,
    author: config.author,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postcss: {
          plugins: () => [autoprefixer],
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
  ],
};
