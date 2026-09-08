import React from 'react'
import { StaticImageData } from 'next/image'
import CauroselInformation from './CauroselInformation'
import Activities from './Activities'

export default function Caurosel({ current, images }: { current: number, images: StaticImageData[] }) {
  return (
    <section className="relative min-h-[540px] w-full overflow-hidden sm:min-h-[600px] lg:min-h-[680px]">
      {images.map((img, index) => (
        <div
          key={index}
          aria-hidden={index !== current}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out before:absolute before:inset-0 before:bg-slate-950/55 ${index === current ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${img.src})` }}
        >
          <div className="relative z-10 flex min-h-135 flex-col justify-center py-16 sm:min-h-[600px] sm:py-20 lg:min-h-[680px]">
            <CauroselInformation />
            <Activities />
          </div>
        </div>
      ))}
    </section>
  )
}
