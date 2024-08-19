// src/components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import '../styles/Header.css'; 

const Header = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleLogout = () => {
    navigate('/logout'); // Navigate to the /logout path
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className="logout-container">
        <span className="logout-link" onClick={handleLogout}>
          Déconnexion
        </span>
      </div>
    </header>
  );
};

export default Header;