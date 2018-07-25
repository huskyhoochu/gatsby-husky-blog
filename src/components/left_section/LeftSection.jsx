import React from 'react';
import PropTypes from 'prop-types';

// Styled
import Styled from './StyledLeftSection';

const LeftSection = ({ children }) => (
  <Styled.LeftSection>
    <Styled.FixedWrapper>
      {children}
      <Styled.GreyOut />
    </Styled.FixedWrapper>
  </Styled.LeftSection>
);

LeftSection.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LeftSection;
