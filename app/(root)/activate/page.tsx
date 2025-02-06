"use client"
import { TypingAnimation } from '@/components/ui/typing-animation'
import React, { useEffect, useState } from 'react'

const Activate = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevkey) => prevkey + 1);
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className='text-8xl text-black font-bold flex flex-wrap justify-center items-center gap-x-4'>Say
        <TypingAnimation
          key={key}
          duration={80}
          className="text-8xl text-gray-800 font-bold"
        >
          "Hi Max"
        </TypingAnimation>
        to wake me up!!
      </h1>
    </div>
  )
}

export default Activate
