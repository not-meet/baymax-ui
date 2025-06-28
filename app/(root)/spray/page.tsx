"use client"
import { TypingAnimation } from '@/components/ui/typing-animation'
import React, { useEffect, useState } from 'react'

const Listning = () => {
  const [countdown, setCountdown] = useState(10);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevkey) => prevkey + 1);
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
      <h1 className='text-6xl text-black font-bold text-center'>
        Please put the bruise mark 5cm away from my palm
      </h1>
      {countdown !== 0 &&
        <h2 className='text-4xl text-gray-700 font-semibold'>
          press the button to spray the spray :)
        </h2>
      }
      {countdown === 0 && (
        <h3 className='flex flex-row text-8xl text-gray-800 font-bold'>
          Spraying
          <TypingAnimation
            key={key}
            duration={80}
            className="text-8xl text-gray-800 font-bold"
          >
            .....!
          </TypingAnimation>
        </h3>

      )}
    </div>
  );
}

export default Listning;
