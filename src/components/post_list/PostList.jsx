import _ from 'lodash';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// Styled
import Styled from './StyledPostList';

const PostList = ({ content }) => _.map(content, ({ node }) => {
  const { date, title } = node.frontmatter;
  return (
      <Styled.PostBody key={node.fields.slug}>
        <Link to={node.fields.slug}>
          <h3>{title}</h3>
          <Styled.PostDate>{date}</Styled.PostDate>
          <Styled.PostExcerpt>{node.excerpt}</Styled.PostExcerpt>
        </Link>
      </Styled.PostBody>
  );
});

const PostWrapper = ({ edges }) => (
  <Fragment>
    <Styled.CategoryTitle>Latest</Styled.CategoryTitle>
    <Styled.PostWrapper>
      <PostList content={edges} />
    </Styled.PostWrapper>
  </Fragment>
);

PostWrapper.propTypes = {
  edges: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostWrapper;
