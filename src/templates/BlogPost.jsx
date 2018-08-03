import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// CSS
import '../assets/css/prismjs-minified.css';

// Component
import Layout from '../layouts/Layout';
import SEOHelmet from '../components/seo_helmet/SEOHelmet';

const BlogPost = ({ data, location }) => {
  const { markdownRemark, site, file } = data;

  return (
    <Layout
      query={{
        itemList: {},
        markdownItem: markdownRemark,
        thumbnail: file.childImageSharp.fluid.src,
      }}
    >
      <SEOHelmet
        content={{
          canonical: `${site.siteMetadata.siteUrl}${location.pathname}`,
          description: markdownRemark.frontmatter.excerpt,
          title: `${markdownRemark.frontmatter.title} | ${
            site.siteMetadata.siteTitle
          }`,
        }}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.object.isRequired,
    }).isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.object.isRequired,
    }).isRequired,
    markdownRemark: PropTypes.shape({
      fields: PropTypes.object.isRequired,
      frontmatter: PropTypes.object.isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteTitle
        author
        siteUrl
      }
    }
    file(relativeDirectory: { regex: $slug }, name: { regex: "/post/" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    markdownRemark(fields: { slug: { regex: $slug } }) {
      html
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
`;
