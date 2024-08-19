// src/components/reasonCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/reasonCard.scss';

const ReasonCard = ({ title, detail, backgroundColor }) => {
  return (
    <div className="reasonCard" style={{ backgroundColor }}>
      <h3>{title}</h3>
      <p>{detail}</p>
    </div>
  );
};

ReasonCard.propTypes = {
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string
};

export default ReasonCard;
