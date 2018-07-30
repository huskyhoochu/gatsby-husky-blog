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
  const { itemList, markdownItem, thumbnail } = query;

  return (
    <Styled.FlexWrapper>
      <ThemeProvider theme={{ main: thumbnail }}>
        <LeftSection>
          <Styled.ContentsWrapper>
            {Object.keys(markdownItem).length !== 0 ? (
              <PostInformation
                content={{
                  frontmatter: markdownItem.frontmatter,
                  author: config.author,
                }}
              />
            ) : (
              <IndexInformation />
            )}
          </Styled.ContentsWrapper>
        </LeftSection>
      </ThemeProvider>
      <RightSection>
        <Styled.ContentsWrapper>
          {Object.keys(markdownItem).length !== 0 ? (
            <Styled.Content
              dangerouslySetInnerHTML={{ __html: markdownItem.html }}
            />
          ) : (
            <PostList
              edges={{
                markdown: itemList.markdown,
                imgSharp: itemList.imgSharp,
              }}
            />
          )}
        </Styled.ContentsWrapper>
      </RightSection>
    </Styled.FlexWrapper>
  );
};

FlexWrapper.propTypes = {
  query: PropTypes.shape({
    itemList: PropTypes.object.isRequired,
    markdownItem: PropTypes.object.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default FlexWrapper;
