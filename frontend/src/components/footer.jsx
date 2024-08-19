// src/components/Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <FontAwesomeIcon icon={faGlobe} className="icon" />
        <span className="footer-text">Arval.com</span>
        <FontAwesomeIcon icon={faArrowRight} className="icon" />
      </div>
    </footer>
  );
};

export default Footer;