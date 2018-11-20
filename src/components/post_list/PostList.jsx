import _ from 'lodash';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// Styled
import Styled from './StyledPostList';

// Methods
import splitSlug from '../../utils/SplitSlugToFilePath';

class PostList extends React.Component {
  static handleTouch(e) {
    e.currentTarget.classList.toggle('move');
  }

  componentDidMount() {
    const el = document.querySelectorAll('.thumbItem');
    _.forEach(el, (node) => {
      node.addEventListener('touchstart', PostList.handleTouch, {
        passive: true,
      });
      node.addEventListener('mouseenter', PostList.handleTouch, {
        passive: true,
      });
      node.addEventListener('mouseleave', PostList.handleTouch, {
        passive: true,
      });
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    const el = document.querySelectorAll('.thumbItem');
    _.forEach(el, (node) => {
      node.removeEventListener('touchstart', PostList.handleTouch);
      node.removeEventListener('mouseenter', PostList.handleTouch);
      node.removeEventListener('mouseleave', PostList.handleTouch);
    });
  }

  render() {
    const { content } = this.props;
    const { markdown, imgSharp } = content;

    return _.map(_.zip(markdown, imgSharp), (item) => {
      const markdownItem = item[0].node;
      const {
        date,
        excerpt,
        title,
        subtitle,
        category,
      } = markdownItem.frontmatter;

      const imgSharpItem = item[1].node;
      const { fixed } = imgSharpItem.childImageSharp;

      return (
        <Styled.PostBody key={markdownItem.fields.slug}>
          <Link to={`/${splitSlug(markdownItem.fields.slug)}`}>
            <Styled.PostThumb
              src={fixed.src}
              srcSet={fixed.srcSet}
              alt="post-thumb"
            />
            <Styled.PostTitle>{title}</Styled.PostTitle>
            <Styled.PostSubtitle>{subtitle}</Styled.PostSubtitle>
            <Styled.PostMetaData>
              <span>{date}</span>
              <span>&nbsp;•&nbsp;</span>
              <span>{_.startCase(category)}</span>
            </Styled.PostMetaData>
            <Styled.PostExcerpt>{excerpt}</Styled.PostExcerpt>
          </Link>
        </Styled.PostBody>
      );
    });
  }
}

const PostWrapper = ({ edges }) => (
  <Fragment>
    <Styled.CategoryTitle>
      {_.startCase(_.kebabCase(edges.category))}
    </Styled.CategoryTitle>
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
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostWrapper;
