import _ from 'lodash';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// Styled
import Styled from './StyledPostList';

class PostList extends React.Component {
  static handleTouch(e) {
    e.currentTarget.classList.toggle('move');
  }

  componentDidMount() {
    const el = document.querySelectorAll('.thumbItem');
    _.forEach(el, (node) => {
      node.addEventListener('touchstart', PostList.handleTouch, false);
      node.addEventListener('mouseenter', PostList.handleTouch, false);
      node.addEventListener('mouseleave', PostList.handleTouch, false);
    });
  }

  render() {
    const { content } = this.props;
    const { markdown, imgSharp } = content;

    return _.map(_.zip(markdown, imgSharp), (item) => {
      const markdownItem = item[0].node;
      const { date, title } = markdownItem.frontmatter;

      const imgSharpItem = item[1].node;
      const { fluid } = imgSharpItem.childImageSharp;

      return (
        <Styled.PostBody key={markdownItem.fields.slug}>
          <Link to={markdownItem.fields.slug}>
            <Styled.PostThumb
              src={fluid.src}
              srcSet={fluid.srcSet}
              alt="post-thumb"
            />
            <h3>{title}</h3>
            <Styled.PostDate>{date}</Styled.PostDate>
            <Styled.PostExcerpt>{markdownItem.excerpt}</Styled.PostExcerpt>
          </Link>
        </Styled.PostBody>
      );
    });
  }
}

const PostWrapper = ({ edges }) => (
  <Fragment>
    <Styled.CategoryTitle>Latest</Styled.CategoryTitle>
    <Styled.PostWrapper>
      <PostList content={edges} />
    </Styled.PostWrapper>
  </Fragment>
);

PostList.propTypes = {
  content: PropTypes.shape({
    markdown: PropTypes.array.isRequired,
    imgSharp: PropTypes.array.isRequired,
  }).isRequired,
};

PostWrapper.propTypes = {
  edges: PropTypes.shape({
    markdown: PropTypes.array.isRequired,
    imgSharp: PropTypes.array.isRequired,
  }).isRequired,
};

export default PostWrapper;
