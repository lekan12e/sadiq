import React from 'react';
import { Apple } from '@mui/icons-material'; // Replace with your logo SVG or image
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';

const Footer = () => {
  return (
    <footer className="pb-8 pt-14">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex items-center mb-4">
          <Apple className="w-8 h-8 mr-2" /> {/* Adjust the size as needed */}
          <h1 className="text-2xl font-bold">Oshedubai Apple Links</h1>
        </div>
        <p className="mb-4">Contact Address:</p>
        <div className="flex items-center mb-4">
          <RoomIcon className="mr-2" />
          <p>Farm Centre, Kano</p>
        </div>
        <div className="flex items-center mb-4">
          <PhoneIcon className="mr-2" />
          <p>08032162000</p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="tel:08032162000" className="hover:underline">
            Call Us
          </a>
          <a href="mailto:info@farmcentre.com" className="hover:underline">
            Email Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
