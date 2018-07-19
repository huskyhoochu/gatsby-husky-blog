import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// Component
import Layout from '../components/layout/Layout';

const BlogPost = ({ data }) => {
  const { markdownRemark } = data;

  return (
    <Layout>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <h1>{markdownRemark.frontmatter.date}</h1>
      <div
        id="content"
        dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        date: PropTypes.string,
        title: PropTypes.string,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`;
