import React from 'react';
import '../styles/AdditionalServices.scss';
import voiture from '../assets/voiture.jpeg';
import pictoMoreGreen from '../assets/picto-more-green.png';

const AdditionalServices = () => {
    return (
        <div className="additional-services-container">
          <div className="textimage-container">
            <div className="left-side">
              <div className="invisible-div"></div>
              <div className="image-container2">
                <img src={voiture} alt="Car" className="service-image" />
              </div>
            </div>
            <div className="text-container">
              <div className="second-text-container">
                <h2>Besoin de services additionnels ?</h2>
                <h3>Arval Switch reste souple</h3>
                <p>Besoin d’équipements divers (siège bébé, rehausseur, coffre de toit, GPS...) ; d’assurances
                    complémentaires, ...
                    Les demandes hors forfait SWITCH seront facturées sur la carte bancaire du conducteur par
                    le loueur courte durée, conformément aux conditions générales de location du contrat courte
                    durée qu’il aura signées en agence.</p>
                <img src={pictoMoreGreen} alt="More Icon" className="more-icon" />
              </div>
            </div>
          </div>
        </div>
      );
};

export default AdditionalServices;