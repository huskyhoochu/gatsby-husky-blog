import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

// Components
import Layout from '../layouts/Layout';

const CategoryList = ({ data, pathContext }) => {
  const { site } = data;
  const { category } = pathContext;

  return (
    <Layout>
      <Helmet>
        <link
          rel="canonical"
          href={`${site.siteMetadata.siteUrl}/categories/${_.kebabCase(
            category,
          )}`}
        />
        <title>{`Category as "${category}"| ${
          site.siteMetadata.siteTitle
        }`}</title>
      </Helmet>
    </Layout>
  );
};

CategoryList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object.isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
  pathContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryList;

export const pageQuery = graphql`
  query CategoryPage($category: String!) {
    site {
      siteMetadata {
        siteTitle
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            excerpt
            title
            subtitle
          }
        }
      }
    }
  }
`;
