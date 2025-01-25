import { User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hot = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="text-center relative z-10">
        <User
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300"
          style={{ opacity: 0.3, width: '500px', height: '500px' }}
        />
        <div className="relative z-20">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            You are having a mild headache!
          </h1>
          <p className="text-2xl text-slate-700 max-w-2xl mx-auto">
            See that you have a mild headache. I recommend drinking some water, taking a short break in a quiet place, and practicing deep breathing. If your symptoms persist or worsen, please consult a healthcare professional
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

export default Hot
