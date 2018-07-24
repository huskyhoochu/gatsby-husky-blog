import React from 'react';

// Styled
import Styled from './StyledGreyOut';

// Methods
import { callSidebar } from '../header/Header';

export default () => (
  <Styled.GreyOut id="grey-out" onClick={() => callSidebar()} aria-hidden />
);
