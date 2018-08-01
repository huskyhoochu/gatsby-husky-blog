import React from 'react';

// Styled
import Styled from './StyledGreyOut';

// Methods
import { Hamburger } from '../header/Header';

class GreyOut extends React.PureComponent {
  constructor(props) {
    super(props);

    this.callSidebar = Hamburger.callSidebar.bind(this);
  }

  render() {
    return <Styled.GreyOut onClick={this.callSidebar} aria-hidden />;
  }
}

export default GreyOut;
