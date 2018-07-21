const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'Huskyhoochu',
    description: '허스키후추의 개발 블로그',
    author: 'Husky',
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
              wrapperStyle: {
                margin: 'auto',
                height: '100%',
              },
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
  ],
};
