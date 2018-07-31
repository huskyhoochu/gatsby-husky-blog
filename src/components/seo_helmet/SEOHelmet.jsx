import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const SEOHelmet = ({ content }) => {
  const { canonical, description, title } = content;

  return (
    <Helmet>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={description} />
      <title>{title}</title>
    </Helmet>
  );
};

SEOHelmet.propTypes = {
  content: PropTypes.shape({
    canonical: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default SEOHelmet;
