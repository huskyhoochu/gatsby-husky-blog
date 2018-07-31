import React from 'react';
import PropTypes from 'prop-types';

// Styled
import Styled from './StyledLeftSection';

class LeftSection extends React.Component {
  static handleTouch(e) {
    e.currentTarget.classList.toggle('move');
  }

  componentDidMount() {
    const el = document.getElementById('left');
    el.addEventListener('touchstart', LeftSection.handleTouch, {
      passive: true,
    });
    el.addEventListener('mouseenter', LeftSection.handleTouch, {
      passive: true,
    });
    el.addEventListener('mouseleave', LeftSection.handleTouch, {
      passive: true,
    });
  }

  render() {
    const { children } = this.props;

    return (
      <Styled.LeftSection>
        <Styled.FixedWrapper>
          {children}
          <Styled.GreyOut />
        </Styled.FixedWrapper>
      </Styled.LeftSection>
    );
  }
}

LeftSection.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LeftSection;
