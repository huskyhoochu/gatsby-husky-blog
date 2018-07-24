import React from 'react';
import PropTypes from 'prop-types';

// Styled
import Styled from './Styled';

const LeftSection = ({ children }) => (
  <Styled.LeftSection>{children}</Styled.LeftSection>
);

LeftSection.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LeftSection;
