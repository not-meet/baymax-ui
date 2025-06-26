import { TypingAnimation } from '@/components/ui/typing-animation'
import Image from 'next/image'
import React from 'react'

const QRScan = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
        Please scan this QR code <br /> upload the necessary file for optimal care. <br /> <TypingAnimation> I will wait patiently &lt;3 </TypingAnimation>
      </h1>

      <Image
        src='/baymax-qr.png'
        width={400}
        height={400}
        alt='QR Code Scanner'
        className="mb-8"
      />
    </div>
  )
}

export default QRScan
