import { TypingAnimation } from '@/components/ui/typing-animation'
import React from 'react'

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className='text-8xl text-black font-bold flex flex-col justify-center items-center gap-x-4'>Oppsie daisy!!
        <TypingAnimation
          className="text-4xl text-gray-800 font-bold"
        >
          ig Sid is late as usuall to deliver the content!!
        </TypingAnimation>
      </h1>
    </div>

  )
}
export default Error
