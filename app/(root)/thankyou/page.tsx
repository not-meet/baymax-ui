import { TypingAnimation } from '@/components/ui/typing-animation'
import Image from 'next/image'
import React from 'react'

const ThankYou = () => {
  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="flex items-center space-x-8">
        <Image
          src='/baymax.png'
          height={400}
          width={400}
          alt='baymax'
          className="z-10"
        />
        <div className="flex flex-col mb-40">
          <h1 className="text-7xl text-gray-900 font-bold mb-4">
            Thank you for allowing me
            <br />
            to assist you.
          </h1>
          <TypingAnimation
            duration={80}
            className='text-3xl text-slate-700 ml-0.5'
          >
            If you liked our work how about you buy us a coffee?!
          </TypingAnimation>
        </div>
      </div>

      <div className="absolute bottom-8 right-8">
        <Image
          src='/pay.jpeg'
          height={280}
          width={280}
          alt='coffee cup'
          className="rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  )
}

export default ThankYou
