"use client"
import { TypingAnimation } from '@/components/ui/typing-animation'
import React, { useEffect, useState } from 'react'

const Listning = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevkey) => prevkey + 1);
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className='text-8xl text-black font-bold flex flex-wrap justify-center items-center gap-x-4'>Listening
        <TypingAnimation
          key={key}
          duration={80}
          className="text-8xl text-gray-800 font-bold"
        >
          .....!
        </TypingAnimation>
      </h1>
    </div>

  )
}

export default Listning
