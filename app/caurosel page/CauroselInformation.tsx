import React from 'react'
import Image from 'next/image'
import group from '../image/group.png'

export default function CauroselInformation() {
  const title = 'Welcome to Agricultural Products Rural Entrepreneurship Management System'
  const brand = 'AgriConnect Hub'
  const description = 'Empowering rural dreams and nurturing agricultural growth. AgriConnect Hub cultivates prosperity from the roots up.'

  return (
    <div className="mxf-auto flex w-full     max-w-7xl flex-col gap-5 px-5 sm:px-8 lg:px-12">
      <p className="max-w-xl text-xs font-bold uppercase tracking-wider text-white sm:text-sm">{title}</p>
      <div className="flex max-w-2xl items-center gap-4 sm:gap-6">
        <h1 className="text-4xl font-extrabold uppercase leading-[0.9] tracking-tight text-white sm:text-5xl lg:text-6xl">{brand}</h1>
        <Image src={group} width={80} className="h-auto lg:mr-57.5 lg:mb-32 w-12 shrink-0 sm:w-16 lg:w-20" alt="AgriConnect Hub mark" />
      </div>
      <p className="max-w-xl text-sm font-medium leading-6 text-white sm:text-base">{description}</p>
    </div>
  )
}
