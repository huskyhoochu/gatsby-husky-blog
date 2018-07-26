import React from 'react';
import config from '../../data/SiteConfig';

// Styled
import Styled from './StyledIndexInformation';

export default () => (
  <Styled.InfoWrapper>
    <Styled.InfoInner>
      <Styled.Quote>{config.welcomeMessage}</Styled.Quote>
      <p>
        <strong>{config.welcomeMessageAuthor}</strong>
      </p>
    </Styled.InfoInner>
  </Styled.InfoWrapper>
);
