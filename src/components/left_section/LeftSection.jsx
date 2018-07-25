import React from 'react';
import PropTypes from 'prop-types';

// Styled
import Styled from './StyledLeftSection';

// Components
import Header from '../header/Header';

const LeftSection = ({ children }) => (
  <Styled.LeftSection>
    <Header />
    {children}
  </Styled.LeftSection>
);

LeftSection.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LeftSection;
