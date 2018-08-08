import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import AdSense from 'react-adsense';
import config from '../../data/SiteConfig';

// Styled
import Styled from '../flex_wrapper/StyledFlexWrapper';

const PostDetail = ({ edges }) => {
  const { markdownItem, category } = edges;

  return (
    <Fragment>
      <Styled.Content dangerouslySetInnerHTML={{ __html: markdownItem.html }} />
      <Styled.Content>
        <hr />
      </Styled.Content>
      <Styled.Content style={{ textAlign: 'center' }}>
        {category !== undefined ? (
          <Link
            to={`/categories/${category}`}
            style={{ color: 'rebeccapurple' }}
          >
            <h5>List</h5>
          </Link>
        ) : (
          <Link to="/" style={{ color: 'rebeccapurple' }}>
            <h5>Home</h5>
          </Link>
        )}
      </Styled.Content>
      <Styled.Content>
        <AdSense.Google
          client={config.google.adSense.clientId}
          slot={config.google.adSense.clientSlot}
          layout="in-article"
        />
      </Styled.Content>
    </Fragment>
  );
};

PostDetail.propTypes = {
  edges: PropTypes.shape({
    markdownItem: PropTypes.object.isRequired,
    category: PropTypes.string,
  }).isRequired,
};

export default PostDetail;
