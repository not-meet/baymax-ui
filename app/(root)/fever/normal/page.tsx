import { User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Normal = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="text-center relative z-10">
        <User
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300"
          style={{ opacity: 0.3, width: '500px', height: '500px' }}
        />
        <div className="relative z-20">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Your temperature is within the normal range !!
          </h1>
          <p className="text-2xl text-slate-700 max-w-2xl mx-auto">
            There is no cause for concern. You are in good health! I am glad to see you are healthy. Remember to stay hydrated!
          </p>
        </div>
      </div>
      <Image
        src='/baymax.png'
        height={100}
        width={100}
        alt='baymax'
        className="absolute bottom-10 right-10 z-30"
      />
    </div>
  )
}

export default Normal
