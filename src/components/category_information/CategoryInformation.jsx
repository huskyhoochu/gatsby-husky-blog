import _ from 'lodash';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import config from '../../data/SiteConfig';

// Styled
import Styled from './StyledCategoryInformation';

const CategoryInformation = ({ category }) => {
  const convertedText = _.kebabCase(category);
  const categoryMessage = config.informationMessage[convertedText];

  return (
    <Fragment>
      <Styled.Quote>{categoryMessage.message}</Styled.Quote>
      <p>
        <strong>{categoryMessage.author}</strong>
      </p>
    </Fragment>
  );
};

CategoryInformation.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryInformation;
