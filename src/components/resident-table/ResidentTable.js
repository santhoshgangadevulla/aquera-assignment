import React, { useState, useEffect } from 'react';
import '../../../src/App.css';
import './resident-table.css';

const ResidentTable = ({ residents, planet }) => {
  const [residentData, setResidentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResidentData = async () => {
      try {
        const data = await Promise.all(
          residents.map(async (residentURL) => {
            const response = await fetch(residentURL);
            return response.json();
          })
        );
        setResidentData(data);
      } catch (error) {
        console.error('Error fetching resident data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResidentData();
  }, [residents]);


  return (
    <div className="resident-table">
      <h3 className="mt-8 mb-2">{planet.name} Residents:</h3>
      {
        loading? (
			<div className="w-full flex justify-center py-8">
				<div id="loader">
            	</div>
			</div>

        ): (
          <table className="bg-black rounded-lg p-3 border-separate border-spacing-0 border-spacing-y-4 border-r-0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Height</th>
              <th>Mass</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {residentData.map((resident) => (
              <tr key={resident.name} className="bg-[#3b3b3b] border-0">
                <td className="rounded-tl-md rounded-bl-md" data-cell="Name">{resident.name}</td>
                <td data-cell="Height">{resident.height}</td>
                <td data-cell="Mass">{resident.mass}</td>
                <td className="rounded-tr-md rounded-br-md" data-cell="Gender">{resident.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
        )
      }
      
    </div>
  );
};

export default ResidentTable;
