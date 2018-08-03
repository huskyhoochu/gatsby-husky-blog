import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// Component
import Layout from '../layouts/Layout';
import SEOHelmet from '../components/seo_helmet/SEOHelmet';

const AboutMe = ({ data, location }) => {
  const { markdownRemark, site, file } = data;

  return (
    <Layout
      query={{
        itemList: {},
        markdownItem: markdownRemark,
        thumbnail: file.childImageSharp.fluid.src,
      }}
    >
      <SEOHelmet
        content={{
          canonical: `${site.siteMetadata.siteUrl}${location.pathname}`,
          description: markdownRemark.frontmatter.excerpt,
          title: `${markdownRemark.frontmatter.title} | ${
            site.siteMetadata.siteTitle
          }`,
        }}
      />
    </Layout>
  );
};

AboutMe.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.object.isRequired,
    }).isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.object.isRequired,
    }).isRequired,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object.isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default AboutMe;

export const pageQuery = graphql`
  query AboutMeQuery {
    site {
      siteMetadata {
        siteTitle
        siteUrl
      }
    }
    file(relativeDirectory: { eq: "images" }, name: { eq: "about_me" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    markdownRemark(frontmatter: { title: { eq: "About Me" } }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        excerpt
        title
        subtitle
      }
    }
  }
`;
