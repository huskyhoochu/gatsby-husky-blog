import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './RightSection.css';

const RightSection = ({ contents }) => (
  <section className="right-section">
    <article className="contents-wrapper">{contents}</article>
  </section>
);

RightSection.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default RightSection;
