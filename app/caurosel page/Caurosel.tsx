import React from 'react'
import { StaticImageData } from 'next/image'
import CauroselInformation from './CauroselInformation'
import Activities from './Activities'

export default function Caurosel({ current, images }: { current: number, images: StaticImageData[] }) {
  return (
    <div className="relative w-full h-200 overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img.src})` }}
        >
          <CauroselInformation />
          <Activities />
        </div>
      ))}
    </div>
  )
}