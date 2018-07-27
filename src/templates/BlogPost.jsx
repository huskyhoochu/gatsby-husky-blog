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
import PostInformation from '../components/post_information/PostInformation';

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
      <ThemeProvider theme={{ main: file.childImageSharp.fluid.src }}>
        <LeftSection>
          <Styled.ContentsWrapper>
            <PostInformation
              content={{
                frontmatter: markdownRemark.frontmatter,
                author: site.siteMetadata.author,
              }}
            />
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
        fluid(quality: 100) {
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
