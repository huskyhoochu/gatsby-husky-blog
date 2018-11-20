import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// Components
import Layout from '../layouts/Layout';
import SEOHelmet from '../components/seo_helmet/SEOHelmet';

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
        markdownItem: {
          frontmatter: {},
          html: '',
        },
        thumbnail: file.childImageSharp.fixed,
        location: '',
        category,
      }}
    >
      <SEOHelmet
        content={{
          canonical: `${site.siteMetadata.siteUrl}/categories/${_.kebabCase(
            category,
          )}`,
          description: _.startCase(_.kebabCase(category)),
          title: `Category as "${_.startCase(_.kebabCase(category))}" | ${
            site.siteMetadata.siteTitle
          }`,
          type: 'website',
          date: '',
          image: '',
        }}
      />
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
      sort: { fields: relativeDirectory, order: DESC }
      filter: {
        relativeDirectory: { ne: "images" }
        name: { regex: $category }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fixed {
              src
              srcSet
            }
          }
        }
      }
    }
    file(relativeDirectory: { eq: "images" }, name: { regex: $category }) {
      childImageSharp {
        fixed {
          src
          srcSet
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
            category
          }
        }
      }
    }
  }
`;
