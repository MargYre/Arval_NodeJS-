// src/components/Hero.jsx
import React from 'react';
import '../styles/Hero.scss';
import heroImage from '../assets/Hero.jpeg';
import electricIcon from '../assets/picto-electrique.png'

const Hero = () => {
  return (
    <div className='wrapper'>
      <div className="image-container">
        <img src={heroImage} alt="Description" className="heroImage" />
      </div>
      <div className="hero-wrapper">
        <div className="heroContainer">
          <h1>LE DUO ÉLECTRIQUE-THERMIQUE ARVAL SWITCH : MODE D’EMPLOI</h1>
          <p>Avec Arval Switch, vos collaborateurs gagnent en autonomie sur la route, mais aussi pour réserver leur véhicule !<br/>
          Aucune action n’est requise de votre part : l’ensemble de la prestation est géré de bout en bout par Arval, 
          en direct avec les conducteurs.</p>
        </div>
      </div>
      <div className="info-box">
        <p>1. Sur simple <span className="highlight">appel téléphonique</span>, ils demandent la mise à disposition d’un véhicule
              thermique ou hybride, en précisant la catégorie souhaitée.
        </p>
            <p>
              2. Le véhicule est <span className="highlight">réservé rapidement</span>, dans l’une des 1 400 agences du réseau
              partenaire d’Arval, réparties dans toute la France métropolitaine (dont Corse).
            </p>
          3. Un <span className="highlight">SMS et/ou un mail de confirmation</span> leur est envoyé, où sont indiqués :
            <ul>
              <li>- la période de réservation</li>
              <li>- les coordonnées de l’agence où retirer le véhicule</li>
              <li>- le solde restant sur leur réserve annuelle de 20 jours</li>
            </ul>
          <img src={electricIcon} alt="Electric Icon" className="electric-icon" />
        </div>
    </div>
  );
};

export default Hero;
