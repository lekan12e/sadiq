import React, { useState, useEffect } from 'react';
import AppleIcon from '../assets/apple_icon.png';
import Profile from '../assets/profile.png';
import { Apple, SamsungData, JBLData } from '../data/data'; // Adjust the import path if necessary
import { Link } from 'react-router-dom';

function Navbar() {
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  // Combine all data sets into a single array
  const combinedData = [...Apple, ...SamsungData, ...JBLData];

  useEffect(() => {
    if (searchInput) {
      const results = combinedData.filter(item =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  }, [searchInput]);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <nav className='flex flex-row sm:flex-row justify-between items-center h-auto sm:h-[40px] mt-9 px-4 sm:px-8'>
        <div className='flex items-center justify-center mb-4 sm:mb-0'>
          <Link to="/">
            <img src={AppleIcon} className='w-[24px]' alt="apple-logo" />
          </Link>
        </div>
        <div className='flex flex-1 items-center h-full justify-center mb-4 sm:mb-0'>
          <input
            className='bg-gray-200 rounded-lg w-full sm:max-w-md h-10 p-3'
            type="text"
            placeholder='🔍 search'
            value={searchInput}
            onChange={handleInputChange}
          />
        </div>
        <div className='flex items-center justify-center'>
          <img src={Profile} className=' mb-3 w-[24px]' alt="profile-logo" />
        </div>
      </nav>
      <div className="search-results mt-2 px-4 sm:px-8">
        {filteredResults.map(item => (
          <div key={`${item.id}-${item.name}`} className='flex items-center p-2 border-b'>
            <img src={item.url} alt={item.name} className='w-12 h-12 mr-4' />
            <div>
              <p className='font-bold'>{item.name}</p>
              {item.spec && <p>{item.spec.chipset}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
