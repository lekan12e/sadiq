import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { JBLData } from '../data/data';
import Navbar from '../components/Navbar';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const JBLDetails = () => {
  const location = useLocation();
  const [device, setDevice] = useState(null);
  const [showPopup, setShowPopup] = useState(false);  // State to manage popup visibility

  useEffect(() => {
    const id = location.pathname.split('/').pop();
    const foundDevice = JBLData.find(device => device.id === parseInt(id));
    setDevice(foundDevice);
  }, [location.pathname]);

  const togglePopup = () => {
    setShowPopup(!showPopup);  // Toggle the visibility
  };

  if (!device) {
    return <h2>Device not found</h2>;
  }

  const message = `Hello, I am interested in the ${device.name}.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/2349094029999?text=${encodedMessage}`;
  const instagramUrl = `https://www.instagram.com/oshe.dubai?igsh=OTBqOXFzd2puMW92&message=${encodedMessage}`;

  return (
    <div className='mx-4 sm:mx-[100px] font-switzer'>
      <Navbar />
      <div className='flex justify-start gap-6 pt-20 sm:pt-20'>
        <div className='flex justify-center items-center h-[357px] sm:w-[390px] bg-[#EFEFEF]'>
            <img className='w-full sm:w-[261px]' src={device.url} alt={device.name} />
        </div>
        <div className='flex flex-col w-full sm:w-[350px] leading-[25px] text-start py-[17px] justify-between'>
            <div>
                <h2 className='font-bold'>{device.name}</h2>
                <p>NAME: <span className='font-bold'>{device.name}</span></p>
            </div>
            <button className='p-5 w-full bg-black rounded-full text-white' onClick={togglePopup}>DM to purchase</button>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 sm:p-16 relative rounded-lg shadow-lg w-full sm:max-w-[400px]">
            <CloseIcon sx={{cursor: 'pointer', width:'24px', position: 'absolute', top: '8px', right: '5px'}} onClick={togglePopup} />
            <div className='flex flex-col justify-self-center items-center'>
                <h4 className='mb-6 text-4xl font-[580px]'>Contact us</h4>
                <a className='mb-4 w-full' target='_blank' href={whatsappUrl}>
                    <div className='flex flex-row gap-1 bg-green-600 rounded-2xl p-4 w-full justify-center items-start'>
                        <WhatsAppIcon sx={{color: 'white'}} />
                        <p className='text-white'>WhatsApp</p>
                    </div>
                </a>
                <a className='mb-4 w-full' target='_blank' href={instagramUrl}>
                    <div className='flex flex-row gap-1 bg-[#E7476E] rounded-2xl p-4 w-full justify-center items-start'>
                        <InstagramIcon sx={{color: 'white'}} />
                        <p className='text-white'>Instagram</p>
                    </div>
                </a>
                <a className='w-full' target='_blank' href="https://www.instagram.com/oshe.dubai?igsh=OTBqOXFzd2puMW92">
                    <div className='flex flex-row gap-1 bg-black rounded-2xl p-4 w-full justify-center items-start'>
                        <XIcon sx={{color: 'white'}} />
                        <p className='text-white'>Twitter</p>
                    </div>
                </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JBLDetails;
