import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import config from '../../data/SiteConfig';

// Styled
import Styled from './StyledFlexWrapper';

// Components
import LeftSection from '../left_section/LeftSection';
import CategoryInformation from '../category_information/CategoryInformation';
import PostInformation from '../post_information/PostInformation';
import PostList from '../post_list/PostList';
import PostDetail from '../post_detail/PostDetail';

const WhatInformation = ({ category, location, markdownItem }) => {
  if (Object.keys(markdownItem.frontmatter).length !== 0) {
    return (
      <PostInformation
        content={{
          frontmatter: markdownItem.frontmatter,
          author: config.author,
          location,
        }}
      />
    );
  }
  return <CategoryInformation category={category} />;
};

const WhatPage = ({ category, itemList, markdownItem }) => {
  if (Object.keys(markdownItem.frontmatter).length !== 0) {
    return (
      <PostDetail
        edges={{
          markdownItem,
          category,
        }}
      />
    );
  }
  return (
    <PostList
      edges={{
        markdown: itemList.markdown,
        imgSharp: itemList.imgSharp,
        category,
      }}
    />
  );
};

class FlexWrapper extends React.PureComponent {
  render() {
    const { query } = this.props;
    return (
      <Styled.FlexWrapper>
        <ThemeProvider
          theme={{
            src: query.thumbnail.src,
            srcSet: query.thumbnail.srcSet,
          }}
        >
          <LeftSection>
            <Styled.ContentsWrapper>
              <Styled.InfoWrapper>
                <Styled.InfoInner>
                  <WhatInformation
                    category={query.category}
                    location={query.location}
                    markdownItem={query.markdownItem}
                  />
                </Styled.InfoInner>
              </Styled.InfoWrapper>
            </Styled.ContentsWrapper>
          </LeftSection>
        </ThemeProvider>
        <Styled.RightSection>
          <Styled.ContentsWrapper>
            <WhatPage
              category={query.category}
              itemList={query.itemList}
              markdownItem={query.markdownItem}
            />
          </Styled.ContentsWrapper>
        </Styled.RightSection>
      </Styled.FlexWrapper>
    );
  }
}

WhatInformation.propTypes = {
  category: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  markdownItem: PropTypes.shape({
    frontmatter: PropTypes.object.isRequired,
    html: PropTypes.string.isRequired,
  }).isRequired,
};

WhatPage.propTypes = {
  category: PropTypes.string.isRequired,
  itemList: PropTypes.shape({
    markdown: PropTypes.array.isRequired,
    imgSharp: PropTypes.array.isRequired,
  }).isRequired,
  markdownItem: PropTypes.shape({
    frontmatter: PropTypes.object.isRequired,
    html: PropTypes.string.isRequired,
  }).isRequired,
};

FlexWrapper.propTypes = {
  query: PropTypes.shape({
    category: PropTypes.string.isRequired,
    itemList: PropTypes.object.isRequired,
    location: PropTypes.string.isRequired,
    markdownItem: PropTypes.shape({
      frontmatter: PropTypes.object.isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
    thumbnail: PropTypes.object.isRequired,
  }).isRequired,
};

export default FlexWrapper;
