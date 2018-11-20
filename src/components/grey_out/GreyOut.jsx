import React from 'react';

// Styled
import Styled from './StyledGreyOut';

// Methods
import { callSidebar } from '../header/Header';

class GreyOut extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <Styled.GreyOut onClick={callSidebar} aria-hidden />;
  }
}

export default GreyOut;
