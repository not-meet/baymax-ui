"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Temperature = () => {
  const [temperature, setTemperature] = useState<number | null>(null);

  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const response = await axios.get('https://baymax-ui.vercel.app/api/data');
        const tempValue = parseFloat(response.data.text);
        setTemperature(tempValue);
      } catch (error) {
        console.error('Error fetching temperature:', error);
      }
    };

    fetchTemperature();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className='text-6xl text-black font-bold text-center'>
        according to me your temperature is around
      </h1>
      {temperature !== null ? (
        <span className='text-8xl font-bold text-red-500 mt-4'>
          {temperature}&deg;C
        </span>
      ) : (
        <span className='text-xl text-gray-500 mt-4'>waits waits waits...</span>
      )}
    </div>
  );
};

export default Temperature;
