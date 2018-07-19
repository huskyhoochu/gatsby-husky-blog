import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

// CSS
import 'bulma/css/bulma.min.css';

// Components
import Layout from '../components/layout/Layout';

const BlogIndex = ({ data }) => (
  <div className="App">
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
    </Helmet>
    <Layout>
      <h1 className="title">Welcome to huskyhoochu blog</h1>
    </Layout>
  </div>
);

BlogIndex.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
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
      }
    }
  }
`;
