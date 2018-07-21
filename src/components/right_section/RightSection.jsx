import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './RightSection.css';

const RightSection = ({ contents }) => (
  <div className="right-section">
    <div className="contents-wrapper">{contents}</div>
  </div>
);

RightSection.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default RightSection;
