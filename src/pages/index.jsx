import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

// CSS
import 'minireset.css/minireset.min.css';

// Styled
import StyledBlogPost from '../templates/StyledBlogPost';

// Components
import Layout from '../components/layout/Layout';
import LeftSection from '../components/left_section/LeftSection';
import RightSection from '../components/right_section/RightSection';
import IndexInformation from '../components/index_information/IndexInformation';
import PostList from '../components/post_list/PostList';

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
      <ThemeProvider theme={{ main: file.childImageSharp.fluid.src }}>
        <LeftSection>
          <StyledBlogPost.ContentsWrapper>
            <IndexInformation />
          </StyledBlogPost.ContentsWrapper>
        </LeftSection>
      </ThemeProvider>
      <RightSection>
        <StyledBlogPost.ContentsWrapper>
          <PostList
            edges={{
              markdown: allMarkdownRemark.edges,
              imgSharp: allFile.edges,
            }}
          />
        </StyledBlogPost.ContentsWrapper>
      </RightSection>
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
          publicURL
          childImageSharp {
            fluid(maxWidth: 610) {
              srcSet
            }
          }
        }
      }
    }
    file(name: { eq: "thumb-min" }) {
      childImageSharp {
        fluid(quality: 100) {
          src
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
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
    }
  }
`;
