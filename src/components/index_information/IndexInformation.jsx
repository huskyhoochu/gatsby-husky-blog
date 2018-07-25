import React from 'react';
import config from '../../data/SiteConfig';

// Styled
import Styled from './StyledIndexInformation';

export default () => (
  <Styled.InfoWrapper>
    <Styled.InfoInner>
      <Styled.Quote>{config.welcomeMessage}</Styled.Quote>
      <h4>{config.welcomeMessageAuthor}</h4>
    </Styled.InfoInner>
  </Styled.InfoWrapper>
);
