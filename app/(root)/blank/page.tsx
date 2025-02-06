import Image from 'next/image'
import React from 'react'

const Blank = () => {
  return (
    <div className="flex flex-col items-center min-h-screen pt-16">
      <Image
        src='/baymax.png'
        height={400}
        width={400}
        alt='baymax'
        className="z-10"
      />
    </div>
  )
}

export default Blank
