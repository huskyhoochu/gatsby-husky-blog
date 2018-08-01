import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import config from '../../data/SiteConfig';

// Styled
import Styled from './StyledFlexWrapper';

// Components
import LeftSection from '../left_section/LeftSection';
import RightSection from '../right_section/RightSection';
import IndexInformation from '../index_information/IndexInformation';
import PostInformation from '../post_information/PostInformation';
import PostList from '../post_list/PostList';

const FlexWrapper = ({ query }) => {
  const {
    itemList, markdownItem, thumbnail, category,
  } = query;

  const whatInformation = () => {
    if (Object.keys(markdownItem).length !== 0) {
      return (
        <PostInformation
          content={{
            frontmatter: markdownItem.frontmatter,
            author: config.author,
          }}
        />
      );
    }
    if (Object.keys(itemList).length !== 0) {
      return <IndexInformation />;
    }
    return <div>about me</div>;
  };

  const whatPage = () => {
    if (Object.keys(markdownItem).length !== 0) {
      return (
        <Styled.Content
          dangerouslySetInnerHTML={{ __html: markdownItem.html }}
        />
      );
    }
    if (Object.keys(itemList).length !== 0) {
      return (
        <PostList
          edges={{
            markdown: itemList.markdown,
            imgSharp: itemList.imgSharp,
            category,
          }}
        />
      );
    }
    return <div>about me</div>;
  };

  return (
    <Styled.FlexWrapper>
      <ThemeProvider theme={{ main: thumbnail }}>
        <LeftSection>
          <Styled.ContentsWrapper>{whatInformation()}</Styled.ContentsWrapper>
        </LeftSection>
      </ThemeProvider>
      <RightSection>
        <Styled.ContentsWrapper>{whatPage()}</Styled.ContentsWrapper>
      </RightSection>
    </Styled.FlexWrapper>
  );
};

FlexWrapper.propTypes = {
  query: PropTypes.shape({
    itemList: PropTypes.object.isRequired,
    markdownItem: PropTypes.object.isRequired,
    thumbnail: PropTypes.string.isRequired,
    category: PropTypes.string,
  }).isRequired,
};

export default FlexWrapper;
