import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './RightSection.css';

const RightSection = ({ children }) => (
  <section className="right-section">{children}</section>
);

RightSection.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RightSection;
