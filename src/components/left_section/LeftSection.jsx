import React from 'react';
import PropTypes from 'prop-types';

// Styled
import Styled from './StyledLeftSection';

const handleTouch = () => {
  const el = document.getElementById('left');
  el.classList.toggle('move');
};

class LeftSection extends React.Component {
  componentDidMount() {
    const el = document.getElementById('left');
    el.addEventListener('touchstart', handleTouch, {
      passive: true,
    });
    el.addEventListener('mouseenter', handleTouch, {
      passive: true,
    });
    el.addEventListener('mouseleave', handleTouch, {
      passive: true,
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    const el = document.getElementById('left');
    el.removeEventListener('touchstart', handleTouch);
    el.removeEventListener('mouseenter', handleTouch);
    el.removeEventListener('mouseleave', handleTouch);
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
