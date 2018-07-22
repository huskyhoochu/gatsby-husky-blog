import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// CSS
import './BlogPost.css';

// Component
import Layout from '../components/layout/Layout';
import LeftSection from '../components/left_section/LeftSection';
import RightSection from '../components/right_section/RightSection';

const BlogPost = ({ data }) => {
  const { markdownRemark, site } = data;

  return (
    <Layout>
      <LeftSection>
        <article className="contents-wrapper">
          <h1>{markdownRemark.frontmatter.title}</h1>
          <h1>{markdownRemark.frontmatter.date}</h1>
          <h1>{site.siteMetadata.author}</h1>
        </article>
      </LeftSection>
      <RightSection>
        <article className="contents-wrapper">
          <div
            id="content"
            dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
          />
        </article>
      </RightSection>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
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
    site {
      siteMetadata {
        title
        author
      }
    }
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
