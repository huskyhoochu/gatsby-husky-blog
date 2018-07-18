import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './RightSection.css';

const RightSection = ({ contents }) => (
  <div id="right" className="column">
    {contents}
  </div>
);

RightSection.propTypes = {
  contents: PropTypes.element.isRequired,
};

export default RightSection;
