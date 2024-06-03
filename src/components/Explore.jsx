import React from 'react';
import apple from '../assets/apple_logo.png';
import samsung from '../assets/samsung_logo.png';
import JBL from '../assets/JBL_logo.png';
import PS from '../assets/ps.png';
import { Link, Outlet } from 'react-router-dom';

const Explore = () => {
  return (
    <div className='flex flex-col mt-[69px] px-4 sm:px-8'>
      <div className='flex flex-col justify-start items-start'>
        <h1 className='font-switzer text-2xl sm:text-4xl leading-9 font-semibold pb-4'>Explore</h1>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-full'>
          <Link to='/apple' className='flex justify-center items-center'>
            <img className='w-full max-w-[60px] sm:max-w-[80px] md:max-w-[100px]' src={apple} alt='apple_category' />
          </Link>
          <Link to="/samsung" className='flex justify-center items-center'>
            <img className='w-full max-w-[60px] sm:max-w-[80px] md:max-w-[100px]' src={samsung} alt='samsung_category' />
          </Link>
          <Link to="/jbl" className='flex justify-center items-center'>
            <img className='w-full max-w-[60px] sm:max-w-[80px] md:max-w-[100px]' src={JBL} alt='jbl_category' />
          </Link>
          <Link to='/ps' className='flex justify-center items-center'>
            <img className='w-full max-w-[60px] sm:max-w-[80px] md:max-w-[100px]' src={PS} alt='ps_category' />
          </Link>
        </div>
      </div>
      <div className='pt-10'>
        
        <Outlet />
      </div>
    </div>
  );
};

export default Explore;
