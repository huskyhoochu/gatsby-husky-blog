import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import '../utils/WebFontLoader';

// CSS
import 'minireset.css/minireset.min.css';

// Components
import Layout from '../layouts/Layout';
import FlexWrapper from '../components/flex_wrapper/FlexWrapper';

const BlogIndex = ({ data }) => {
  const {
    allFile, allMarkdownRemark, site, file,
  } = data;

  return (
    <Layout>
      <Helmet>
        <link rel="canonical" href={site.siteMetadata.siteUrl} />
        <meta name="description" content={site.siteMetadata.description} />
        <title>{`${site.siteMetadata.siteTitle} | ${
          site.siteMetadata.siteTitleKorean
        }`}</title>
      </Helmet>
      <FlexWrapper
        query={{
          markdown: allMarkdownRemark.edges,
          imgSharp: allFile.edges,
          thumbnail: file.childImageSharp.fluid.src,
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
      sort: { fields: mtime, order: DESC }
      filter: { name: { eq: "post_thumb" } }
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
    allImageSharp {
      edges {
        node {
          ... on ImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;
