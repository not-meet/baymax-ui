import { TypingAnimation } from '@/components/ui/typing-animation'
import Image from 'next/image'
import React from 'react'

const ThankYou = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center space-x-8">
        <Image
          src='/baymax.png'
          height={400}
          width={400}
          alt='baymax'
          className="z-10"
        />
        <div className="flex flex-col">
          <h1 className="text-7xl text-gray-900 font-bold mb-4">
            Thank you for allowing me
            <br />
            to assist you.
          </h1>
          <TypingAnimation
            duration={80}
            className='text-xl text-slate-700 ml-0.5'
          >
            Here is a complimentary lollipop. Have a healthy day!
          </TypingAnimation>
        </div>
      </div>
    </div>
  )
}

export default ThankYou
