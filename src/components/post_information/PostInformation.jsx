import React from 'react';
import PropTypes from 'prop-types';

// Styled
import StyledIndexInformation from '../index_information/StyledIndexInformation';

const PostInformation = ({ content }) => (
  <StyledIndexInformation.InfoWrapper>
    <StyledIndexInformation.InfoInner>
      <h2>{content.frontmatter.title}</h2>
      <p>
        <span>{content.frontmatter.date}</span>
        <span>&nbsp;|&nbsp;</span>
        <strong>{content.author}</strong>
      </p>
    </StyledIndexInformation.InfoInner>
  </StyledIndexInformation.InfoWrapper>
);

PostInformation.propTypes = {
  content: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostInformation;
