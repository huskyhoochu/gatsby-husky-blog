import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

// Component
import Layout from '../layouts/Layout';
import FlexWrapper from '../components/flex_wrapper/FlexWrapper';

const BlogPost = ({ data }) => {
  const { markdownRemark, site, file } = data;

  return (
    <Layout>
      <Helmet>
        <link
          rel="canonical"
          href={site.siteMetadata.siteUrl + markdownRemark.fields.slug}
        />
        <meta name="description" content={markdownRemark.frontmatter.excerpt} />
        <title>{`${markdownRemark.frontmatter.title} | ${
          site.siteMetadata.siteTitle
        }`}</title>
      </Helmet>
      <FlexWrapper
        query={{
          itemList: {},
          markdownItem: markdownRemark,
          thumbnail: file.childImageSharp.fluid.src,
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
    file(relativeDirectory: { regex: $slug }, name: { eq: "post_thumb" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
