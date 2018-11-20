import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// Component
import Layout from '../layouts/Layout';
import SEOHelmet from '../components/seo_helmet/SEOHelmet';

const AboutMe = ({ data }) => {
  const { markdownRemark, site, file } = data;

  const layoutQuery = {
    itemList: {
      markdown: [],
      imgSharp: [],
    },
    markdownItem: markdownRemark,
    thumbnail: file.childImageSharp.fixed,
    location: 'about-me',
    category: '',
  };

  const helmetContent = {
    canonical: `${site.siteMetadata.siteUrl}/about-me`,
    description: markdownRemark.frontmatter.excerpt,
    title: `${markdownRemark.frontmatter.title} | ${
      site.siteMetadata.siteTitle
    }`,
    type: 'article',
    date: markdownRemark.frontmatter.date,
    image: file.childImageSharp.fixed.src,
  };

  return (
    <Layout query={layoutQuery}>
      <SEOHelmet content={helmetContent} />
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
        fixed {
          src
          srcSet
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
