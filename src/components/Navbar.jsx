import React, { useState, useEffect } from 'react';
import AppleIcon from '../assets/apple_icon.png';
import Profile from '../assets/profile.png';
import { Apple, SamsungData, JBLData } from '../data/data'; // Adjust the import path if necessary
import { Link } from 'react-router-dom';
import { mockAuth } from '../auth/mockAuth';

function Navbar() {
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

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

  const handleProfileClick = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logged out'); // Placeholder for logout logic
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
        <div className='relative'>
          <img
            src={Profile}
            className='mb-3 w-[24px] cursor-pointer'
            alt="profile-logo"
            onClick={handleProfileClick}
          />
          {isPopupVisible && (
            <div className='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg'>
              <div className='p-2'>
                <Link to="/login">
                <p className='cursor-pointer hover:bg-gray-100 p-2' onClick={handleLogout}>
                  Logout
                </p>
                </Link>
                <Link to="/change-password" className='cursor-pointer hover:bg-gray-100 p-2'>
                  Change Password
                </Link>
              </div>
            </div>
          )}
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
