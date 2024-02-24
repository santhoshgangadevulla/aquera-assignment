import React, { useState, useEffect, useCallback } from 'react';
import PlanetCard from './components/planet-card/PlanetCard';
import Pagination from './components/pagination/Pagination';
import Header from './layout/Header/Header';
import './App.css';

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const entriesPerPage = 5;

  const fetchPlanets = useCallback(async () => {
    try {
      const response = await fetch(`https://swapi.dev/api/planets/?format=json`);
      const data = await response.json();

      setPlanets(data.results);
      setTotalPages(Math.ceil(data.results.length / entriesPerPage));
	  setLoading(false);
    } catch (error) {
      console.error('Error fetching planets:', error);
	  setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const paginatedPlanets = planets.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage);

  return (
	<div>
		<div className="bg-[#1d1c1c] fixed top-0 left-0 w-full">
			<Header />
		</div>
		<h1 className="text-2xl text-white text-center font-ibm md:text-5xl my-12 mt-36 md:my-24 md:mt-44">Star Wars Planets Directory</h1>
		<div className="app">
			{loading ? (
				<div className="w-full flex justify-center py-8">
					<div id="loader"></div>
				</div>
			): (
				<>
					<div className="planet-container">
						{paginatedPlanets.map((planet) => (
						<PlanetCard key={planet.name} planet={planet} />
						))}
					</div>
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						onNextPage={handleNextPage}
						onPrevPage={handlePrevPage}
					/>
				</>
			)}
		</div>
		
	</div>

  );
};

export default App;
