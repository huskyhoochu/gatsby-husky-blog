import React from 'react';
import config from '../../data/SiteConfig';

// Styled
import Styled from './StyledIndexInformation';

export default () => (
  <Styled.InfoWrapper>
    <Styled.InfoInner>
      <Styled.Quote>{config.welcomeMessage}</Styled.Quote>
      <h6>{config.welcomeMessageAuthor}</h6>
    </Styled.InfoInner>
  </Styled.InfoWrapper>
);
