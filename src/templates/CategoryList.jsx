import _ from 'lodash';
import React from 'react';
import { graphql } from 'gatsby';

// Components
// import PostList from '../components/post_list/PostList';

const CategoryList = ({ data }) => {
  const { allMarkdownRemark } = data;
  return _.map(allMarkdownRemark.edges, ({ node }) => (
    <p>{node.frontmatter.title}</p>
  ));
};

export default CategoryList;

export const pageQuery = graphql`
  query CategoryPage($category: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
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
    }
  }
`;
