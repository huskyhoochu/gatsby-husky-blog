import _ from 'lodash';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import config from '../../data/SiteConfig';

// Styled
import StyledBasic from '../../layouts/StyledBasic';
import Styled from './StyledCategoryInformation';

const CategoryInformation = ({ category }) => {
  const convertedText = _.kebabCase(category);
  const categoryMessage = config.informationMessage[convertedText];

  return (
    <Fragment>
      <Styled.Quote>{categoryMessage.message}</Styled.Quote>
      <StyledBasic.BasicP>
        <strong>{categoryMessage.author}</strong>
      </StyledBasic.BasicP>
    </Fragment>
  );
};

CategoryInformation.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryInformation;
