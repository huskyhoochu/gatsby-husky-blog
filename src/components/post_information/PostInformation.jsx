import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PostInformation = ({ content }) => (
  <Fragment>
    <h3>{content.frontmatter.title}</h3>
    <h6>{content.frontmatter.subtitle}</h6>
    <p>
      <span>{content.frontmatter.date}</span>
      <span>&nbsp;|&nbsp;</span>
      <strong>{content.author}</strong>
    </p>
  </Fragment>
);

PostInformation.propTypes = {
  content: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostInformation;
