import React, { Fragment } from 'react';
import config from '../../data/SiteConfig';

// Styled
import Styled from './StyledCategoryInformation';

export default () => (
  <Fragment>
    <Styled.Quote>{config.welcomeMessage}</Styled.Quote>
    <p>
      <strong>{config.welcomeMessageAuthor}</strong>
    </p>
  </Fragment>
);
