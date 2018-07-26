import _ from 'lodash';
import React from 'react';
import { Link } from 'gatsby';

const PostList = ({ content }) => _.map(content, ({ node }) => {
  const { title } = node.frontmatter;
  return (
      <div key={node.fields.slug}>
        <Link to={node.fields.slug}>
          <h3>{title}</h3>
          <p>{node.excerpt}</p>
        </Link>
      </div>
  );
});

export default PostList;
