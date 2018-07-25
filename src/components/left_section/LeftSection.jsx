import React from 'react';
import PropTypes from 'prop-types';

// Styled
import Styled from './StyledLeftSection';

// Components
import Header from '../header/Header';

const LeftSection = ({ children }) => (
  <Styled.LeftSection>
    <Styled.FixedWrapper>
      <Header />
      {children}
    </Styled.FixedWrapper>
  </Styled.LeftSection>
);

LeftSection.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LeftSection;
