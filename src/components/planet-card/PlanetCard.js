import React, { useState } from 'react';
import ResidentTable from '../resident-table/ResidentTable';
import '../../../src/App.css';
import './planet-card.css';

const PlanetCard = ({ planet }) => {
  const [showResidents, setShowResidents] = useState(false);

  const toggleResidents = () => {
    setShowResidents((prev) => !prev);
  };

  return (
    <div className="planet-card rounded-lg p-5" onClick={toggleResidents}>
        <div className="flex flex-col md:flex-row">
            <div className="md:mr-8 mb-3 py-10 md:py-0 md:mb-0 bg-black rounded-lg md:w-2/5 flex flex-column justify-center items-center">
                <h2 className="aa-planetName font-bold text-3xl lg:text-5xl">{planet.name}</h2>
            </div>
            <div className="md:w-3/5">
                <p className="font-medium text-base mb-0.5">Climate - <span className="font-light text-sm">{planet.climate}</span></p>
                <p className="font-medium text-base mb-0.5">Population - <span className="font-light text-sm">{planet.population}</span></p>
                <p className="font-medium text-base mb-2">Terrain - <span className="font-light text-sm">{planet.terrain}</span></p>
                <p className="text-sm font-light">{planet.name} is a planet with an {planet.climate} climate, characterized by its {planet.terrain} terrain. It has a population of {planet.population} inhabitants.</p>
            </div>
        </div>
      {showResidents && (
        <div>
          <ResidentTable residents={planet.residents} planet={planet} />
        </div>
      )}
    </div>
  );
};

export default PlanetCard;
