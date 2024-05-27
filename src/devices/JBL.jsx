import React from 'react';
import { JBLData } from '../data/data';
import { Link } from 'react-router-dom';

const JBL = () => {
  return (
    <div className='flex flex-wrap gap-4 max-w-[100%] overflow-x-hidden'>
      {JBLData.map(({ id, url, name }) => (
        <Link key={id} to={`/jbl/${id}`}>
          <div className='flex flex-col w-[120px] sm:w-[160px] items-start justify-center'>
            <div className='w-full'>
              <img className='max-w-full h-auto sm:max-w-[100px] sm:max-h-[100px]' src={url} alt={name} />
            </div>
            <h2 className='font-medium mt-2 text-center'>{name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default JBL;
