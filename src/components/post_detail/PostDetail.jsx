import _ from 'lodash';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import AdSense from 'react-adsense';
import config from '../../data/SiteConfig';

// Styled
import Styled from '../flex_wrapper/StyledFlexWrapper';

const wrapTableElement = () => {
  if (document.querySelector('table')) {
    const nodeList = document.querySelectorAll('table');

    _.forEach(nodeList, (node) => {
      const newDiv = document.createElement('div');
      newDiv.className = 'table-wrapper';
      node.parentNode.insertBefore(newDiv, node);
    });

    const wrapperList = document.querySelectorAll('.table-wrapper');

    _.forEach(_.zip(nodeList, wrapperList), (item) => {
      item[1].appendChild(item[0]);
    });
  }
};

class PostDetail extends React.Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      wrapTableElement();
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { edges } = this.props;

    return (
      <Fragment>
        <Styled.Content
          dangerouslySetInnerHTML={{ __html: edges.markdownItem.html }}
        />
        <Styled.Content>
          <hr />
        </Styled.Content>
        <Styled.Content style={{ textAlign: 'center' }}>
          {edges.category !== undefined ? (
            <Link
              to={`/categories/${edges.category}`}
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
        <div style={{ margin: '1rem' }}>
          <AdSense.Google
            client={config.google.adSense.clientId}
            slot={config.google.adSense.clientSlot}
            layout="in-article"
            format="auto"
            responsive="true"
          />
        </div>
      </Fragment>
    );
  }
}

PostDetail.propTypes = {
  edges: PropTypes.shape({
    markdownItem: PropTypes.object.isRequired,
    category: PropTypes.string,
  }).isRequired,
};

export default PostDetail;
