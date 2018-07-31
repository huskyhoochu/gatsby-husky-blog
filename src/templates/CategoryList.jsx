import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

// Components
import Layout from '../layouts/Layout';

const CategoryList = ({ data, pathContext }) => {
  const {
    allFile, allMarkdownRemark, file, site,
  } = data;
  const { category } = pathContext;

  return (
    <Layout
      query={{
        itemList: {
          markdown: allMarkdownRemark.edges,
          imgSharp: allFile.edges,
        },
        markdownItem: {},
        thumbnail: file.childImageSharp.fluid.src,
        category,
      }}
    >
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
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf.isRequired,
    }).isRequired,
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf.isRequired,
    }).isRequired,
    file: PropTypes.shape({
      childImageSharp: PropTypes.object.isRequired,
    }).isRequired,
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
    allFile(
      sort: { fields: mtime, order: DESC }
      filter: { name: { regex: $category } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 610) {
              src
            }
          }
        }
      }
    }
    file(name: { eq: "thumb_min" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { regex: $category } } }
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
