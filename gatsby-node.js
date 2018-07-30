const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/BlogPost.jsx');
    const categoryPage = path.resolve('./src/templates/CategoryList.jsx');

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `,
      ).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }

        const posts = result.data.allMarkdownRemark.edges;
        const categorySet = new Set();

        _.forEach(posts, ({ node }) => {
          categorySet.add(node.frontmatter.category);

          createPage({
            path: node.fields.slug,
            component: blogPost,
            context: {
              slug: node.fields.slug,
            },
          });
        });

        const categoryList = Array.from(categorySet);

        _.forEach(categoryList, (category) => {
          createPage({
            path: `/categories/${_.kebabCase(category)}`,
            component: categoryPage,
            context: {
              category,
            },
          });
        });
      }),
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
