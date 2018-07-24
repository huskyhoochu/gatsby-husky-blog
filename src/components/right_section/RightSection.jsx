import React from 'react';
import PropTypes from 'prop-types';

// Styled
import Styled from './StyledRightSection';

const RightSection = ({ children }) => (
  <Styled.RightSection>{children}</Styled.RightSection>
);

RightSection.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RightSection;
