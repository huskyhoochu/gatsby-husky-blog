import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
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
    <Fragment>
      <Layout>
        <Helmet>
          <link
            rel="canonical"
            href={site.siteMetadata.site_url + markdownRemark.fields.slug}
          />
          <meta name="description" content={markdownRemark.excerpt} />
          <title>{`${markdownRemark.frontmatter.title} | ${
            site.siteMetadata.title
          }`}</title>
        </Helmet>
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
    </Fragment>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        site_url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    markdownRemark: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }).isRequired,
      frontmatter: PropTypes.shape({
        date: PropTypes.string,
        title: PropTypes.string,
      }).isRequired,
      html: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
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
        site_url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`;
