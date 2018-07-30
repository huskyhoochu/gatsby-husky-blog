import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

// Styled
import Styled from './StyledFlexWrapper';

// Components
import LeftSection from '../left_section/LeftSection';
import RightSection from '../right_section/RightSection';
import IndexInformation from '../index_information/IndexInformation';
import PostList from '../post_list/PostList';

const FlexWrapper = ({ query }) => {
  const { markdown, imgSharp, thumbnail } = query;

  return (
    <Styled.FlexWrapper>
      <ThemeProvider theme={{ main: thumbnail }}>
        <LeftSection>
          <Styled.ContentsWrapper>
            <IndexInformation />
          </Styled.ContentsWrapper>
        </LeftSection>
      </ThemeProvider>
      <RightSection>
        <Styled.ContentsWrapper>
          <PostList
            edges={{
              markdown,
              imgSharp,
            }}
          />
        </Styled.ContentsWrapper>
      </RightSection>
    </Styled.FlexWrapper>
  );
};

FlexWrapper.propTypes = {
  query: PropTypes.shape({
    markdown: PropTypes.array.isRequired,
    imgSharp: PropTypes.array.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default FlexWrapper;
