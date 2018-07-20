const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'Huskyhoochu',
    description: '허스키후추의 개발 블로그',
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
    'gatsby-transformer-remark',
  ],
};
