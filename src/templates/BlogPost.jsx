import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

// Styled
import Styled from './StyledBlogPost';

// Component
import Layout from '../components/layout/Layout';
import LeftSection from '../components/left_section/LeftSection';
import RightSection from '../components/right_section/RightSection';

const BlogPost = ({ data }) => {
  const { markdownRemark, site, file } = data;

  return (
    <Layout>
      <Helmet>
        <link
          rel="canonical"
          href={site.siteMetadata.siteUrl + markdownRemark.fields.slug}
        />
        <meta name="description" content={markdownRemark.excerpt} />
        <title>{`${markdownRemark.frontmatter.title} | ${
          site.siteMetadata.siteTitle
        }`}</title>
      </Helmet>
      <ThemeProvider theme={{ main: file.publicURL }}>
        <LeftSection>
          <Styled.ContentsWrapper>
            <h1>{markdownRemark.frontmatter.title}</h1>
            <h1>{markdownRemark.frontmatter.date}</h1>
            <h1>{site.siteMetadata.author}</h1>
          </Styled.ContentsWrapper>
        </LeftSection>
      </ThemeProvider>
      <RightSection>
        <Styled.ContentsWrapper>
          <Styled.Content
            dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
          />
        </Styled.ContentsWrapper>
      </RightSection>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
    }).isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        siteTitle: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        siteUrl: PropTypes.string.isRequired,
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
        siteTitle
        author
        siteUrl
      }
    }
    file(relativeDirectory: { regex: $slug }, name: { eq: "post_thumb" }) {
      publicURL
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
