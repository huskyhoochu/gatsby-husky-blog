import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FacebookProvider, Share } from 'react-facebook';
import config from '../../data/SiteConfig';

// CSS
import faFacebook from '../../assets/icons/facebook.svg';

// Styled
import Styled from './StyledPostInformation';

const PostInformation = ({ content }) => (
  <Fragment>
    <h3>{content.frontmatter.title}</h3>
    <h6>{content.frontmatter.subtitle}</h6>
    <p>
      <span>{content.frontmatter.date}</span>
      <span>&nbsp;|&nbsp;</span>
      <strong>{content.author}</strong>
    </p>
    {content.location && (
      <p>
        <FacebookProvider appId={config.facebookAppId}>
          <Share href={`${config.siteUrl}/${content.location}`}>
            {({ handleClick }) => (
              <Styled.IconButton onClick={handleClick}>
                <Styled.Icon src={faFacebook} />
              </Styled.IconButton>
            )}
          </Share>
        </FacebookProvider>
      </p>
    )}
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
    location: PropTypes.string,
  }).isRequired,
};

export default PostInformation;
