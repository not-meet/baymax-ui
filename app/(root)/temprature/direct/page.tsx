import { TypingAnimation } from '@/components/ui/typing-animation'
import React from 'react'

const Direct = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="text-center">
        <h1 className='text-4xl md:text-6xl text-black font-bold flex flex-col items-center justify-center gap-y-4'>
          <span>please put your forehead on my palm.!</span>
          <TypingAnimation className="text-3xl md:text-5xl text-gray-700">
            so that i can examin you well!
          </TypingAnimation>
        </h1>
      </div>
    </div>
  )
}

export default Direct
