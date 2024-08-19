// src/components/mainContent.jsx
import React from 'react';
import '../styles/mainContent.scss';
import Hero from '../components/hero';
import AdditionalServices from '../components/additionalServices';
import PackageOption from '../components/packageOption';
import carIcon from '../assets/picto-car.png';
import ReasonCard from '../components/reasonCard';

const MainContent = () => {
  const essentials = [
    <>
      • Vos collaborateurs peuvent choisir des véhicules de catégorie Citadine, Compacte, Routière, Confort (automatique) et petit Monospace.
      <br />
      <br/>
      En plus des véhicules de la formule Essentiel, véhicules Confort et Grand.
    </>
  ];

  const essentialsPlus = [
    "• Confort (automatiques), Moyen et Grand Monospace (7 places)."
  ];

  return (
    <main className="main-content">
      <Hero />
      <AdditionalServices />
      <h1>Comment souscrire le forfait Arval switch ?</h1>
      <h2>2 formules sont proposées :</h2>
      <div className="allOptions">
        <img src={carIcon} alt="Car Icon" className="car-icon" />
        <PackageOption title="Arval Switch Essentiel" details={essentials} backgroundColor="#ffc415" />
        <PackageOption title="Arval Switch Essentiel Plus" details={essentialsPlus} backgroundColor="#dfff82" />
      </div>
      <h1 className="centered-title">4 bonnes raisons d’opter pour Arval Switch</h1>
      <div className="reasonCardsContainer">
        <ReasonCard 
          title="Accélérez la transition électrique de votre flotte" 
          detail="tout en levant les freins de vos collaborateurs les plus réticents quant à l’autonomie de leur véhicule. Une solution clé en main pour harmoniser vos objectifs de Responsabilité Sociale et Environnementale (RSE) avec la mobilité de vos collaborateurs."
          backgroundColor="#CBE4DE"
        />
        <ReasonCard 
          title="Renforcez l'attractivité RH de votre entreprise"
          detail="Offrez à vos collaborateurs une solution pratique pour leurs trajets longue distance, activable facilement selon leurs besoins : réservation simplifiée, large choix de véhicules, mise à disposition rapide."
          backgroundColor="#CBE4DE"
        />
      </div>
      <div className="reasonCardsContainer">
        <ReasonCard 
          title="Maîtrisez votre budget"
          detail="Fixe et connu à l’avance, le tarif mensuel du forfait Arval Switch est inclus dans le contrat de location du véhicule électrique."
          backgroundColor="#f0f4c3"
        />
        <ReasonCard 
          title="Simplifiez votre gestion"
          detail="Vous n’avez rien à faire : la réservation, la mise à disposition et la remise du véhicule thermique s’effectuent par le collaborateur lui-même en direct avec Arval."
          backgroundColor="#f0f4c3"
        />
      </div>
    </main>
  );
};

export default MainContent;
