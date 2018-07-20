import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './RightSection.css';

const RightSection = ({ contents }) => (
  <div id="right" className="">
    {contents}
  </div>
);

RightSection.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default RightSection;
