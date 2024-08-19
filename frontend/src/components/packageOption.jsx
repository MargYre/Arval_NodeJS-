// src/components/PackageOption.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/packageOption.scss'; // Assurez-vous que le chemin est correct

const PackageOption = ({ title, details, backgroundColor }) => {
  return (
    <div className="packageOptions" style={{ backgroundColor }}>
      <h3>{title}</h3>
      <ul className="options-container">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

PackageOption.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.node).isRequired,
  backgroundColor: PropTypes.string,
};

export default PackageOption;
