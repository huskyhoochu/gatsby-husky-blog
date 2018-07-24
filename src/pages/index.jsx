import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';

// CSS
import 'minireset.css/minireset.min.css';
import './index.css';

// Styled
import StyledBlogPost from '../templates/StyledBlogPost';

// Components
import Layout from '../components/layout/Layout';
import LeftSection from '../components/left_section/LeftSection';
import RightSection from '../components/right_section/RightSection';

const BlogIndex = ({ data }) => {
  const { allMarkdownRemark, site } = data;

  return (
    <Layout>
      <Helmet>
        <link rel="canonical" href={site.siteMetadata.siteUrl} />
        <meta name="description" content={site.siteMetadata.description} />
        <title>{`${site.siteMetadata.siteTitle} | ${
          site.siteMetadata.siteTitleKorean
        }`}</title>
      </Helmet>
      <LeftSection>
        <StyledBlogPost.ContentsWrapper>
          <h1>{site.siteMetadata.siteTitle}</h1>
        </StyledBlogPost.ContentsWrapper>
      </LeftSection>
      <RightSection>
        <StyledBlogPost.ContentsWrapper>
          {_.map(allMarkdownRemark.edges, ({ node }) => {
            const { title } = node.frontmatter;
            return (
              <div key={node.fields.slug}>
                <Link to={node.fields.slug}>
                  <h3>{title}</h3>
                </Link>
              </div>
            );
          })}
        </StyledBlogPost.ContentsWrapper>
      </RightSection>
    </Layout>
  );
};

BlogIndex.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        siteTitle: PropTypes.string.isRequired,
        siteTitleKorean: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        siteUrl: PropTypes.string.isRequired,
      }).isRequired,
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
