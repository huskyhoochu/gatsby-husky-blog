import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './LeftSection.css';

const LeftSection = ({ children }) => (
  <section className="left-section">{children}</section>
);

LeftSection.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LeftSection;
