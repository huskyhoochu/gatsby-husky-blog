import _ from 'lodash';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// Styled
import Styled from './StyledPostList';

const PostList = ({ content }) => _.map(content, ({ node }) => {
  const { date, title } = node.frontmatter;
  return (
      <div key={node.fields.slug}>
        <Link to={node.fields.slug}>
          <h3>{title}</h3>
          <p>{date}</p>
          <p>{node.excerpt}</p>
        </Link>
      </div>
  );
});

const PostWrapper = ({ edges }) => (
  <Fragment>
    <Styled.CategoryTitle>hi</Styled.CategoryTitle>
    <PostList content={edges} />
  </Fragment>
);

PostWrapper.propTypes = {
  edges: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostWrapper;
