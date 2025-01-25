import { TypingAnimation } from '@/components/ui/typing-animation'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen pt-16">
      <Image
        src='/baymax.png'
        height={400}
        width={400}
        alt='baymax'
        className="z-10"
      />
      <h1 className="text-8xl text-gray-900 font-bold mb-2">Welcome to Baymax</h1>
      <TypingAnimation
        duration={80}
        className='text-xl text-slate-700 ml-0.5'
      >
        your own personalised healthcare assistant !!
      </TypingAnimation>
    </div>
  )
}

export default Home
