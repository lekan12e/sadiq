import React from 'react';
import hero from '../assets/hero.png';

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-[86px] w-full'>
      <img
        className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl'
        src={hero}
        alt="Hero Image"
      />
    </div>
  );
};

export default Hero;
