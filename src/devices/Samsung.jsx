import React,{useState,useEffect} from 'react';
import { JBLData } from '../data/data';
import { Link } from 'react-router-dom';

const Samsung = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("http://localhost:3000/SamsungData")
        .then(response => response.json())
        .then(data => {
          setData(data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }, 2000); // 2-second delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);
  return (
    <div className='flex flex-wrap gap-4 max-w-[100%] overflow-x-hidden'>
      {loading ? (
        <div className="flex justify-center items-center w-full h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-500"></div>
        </div>
      ) : (
      data && data.map(({ id, url, name }) => (
        <Link key={id} to={`/samsung/${id}`}>
          <div className='flex flex-col w-[120px] sm:w-[160px] items-start justify-center'>
            <div className='w-full'>
              <img className='max-w-full h-auto sm:max-w-[100px] sm:max-h-[100px]' src={url} alt={name} />
            </div>
            <h2 className='font-medium mt-2 text-center'>{name}</h2>
          </div>
        </Link>
      )))}
    </div>
  );
};

export default Samsung;
