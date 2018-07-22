import _ from 'lodash';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';

// CSS
import 'minireset.css/minireset.min.css';
import './index.css';

// Components
import Layout from '../components/layout/Layout';
import LeftSection from '../components/left_section/LeftSection';
import RightSection from '../components/right_section/RightSection';

const BlogIndex = ({ data }) => {
  const { allMarkdownRemark, site } = data;

  return (
    <Fragment>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
      </Helmet>
      <Layout>
        <LeftSection>
          <article className="contents-wrapper">
            <h1>{site.siteMetadata.title}</h1>
          </article>
        </LeftSection>
        <RightSection>
          <article className="contents-wrapper">
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
          </article>
        </RightSection>
      </Layout>
    </Fragment>
  );
};

BlogIndex.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
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
        title
        description
        author
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
