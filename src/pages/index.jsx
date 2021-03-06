import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import '../utils/WebFontLoader';

// CSS
import 'minireset.css/minireset.min.css';

// Components
import Layout from '../layouts/Layout';
import SEOHelmet from '../components/seo_helmet/SEOHelmet';

const BlogIndex = ({ data }) => {
  const {
    allFile, allMarkdownRemark, site, file,
  } = data;

  return (
    <Layout
      query={{
        itemList: {
          markdown: allMarkdownRemark.edges,
          imgSharp: allFile.edges,
        },
        markdownItem: {},
        thumbnail: file.childImageSharp.fixed,
        category: 'Latest',
      }}
    >
      <SEOHelmet
        content={{
          canonical: site.siteMetadata.siteUrl,
          description: site.siteMetadata.description,
          title: `${site.siteMetadata.siteTitle} | ${
            site.siteMetadata.siteTitleKorean
          }`,
          type: 'website',
        }}
      />
    </Layout>
  );
};

BlogIndex.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.object.isRequired,
    }).isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.object.isRequired,
    }).isRequired,
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf.isRequired,
    }).isRequired,
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf.isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteTitle
        siteTitleKorean
        description
        siteUrl
      }
    }
    allFile(
      sort: { fields: relativeDirectory, order: DESC }
      filter: { name: { regex: "/post/" } }
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
    file(relativeDirectory: { eq: "images" }, name: { eq: "category_index" }) {
      childImageSharp {
        fixed {
          src
          srcSet
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: "false" } } }
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
    allImageSharp {
      edges {
        node {
          ... on ImageSharp {
            fixed {
              src
              srcSet
            }
          }
        }
      }
    }
  }
`;
