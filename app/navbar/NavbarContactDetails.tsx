import React from 'react'
import SearchIcon from '../icon/searchnormal1.png'
import ShoppingCartIcon from '../icon/shoppingcart.png'
import CallIcon from '../icon/phone.png'
import Image from 'next/image'

export default function NavbarContactDetails() {
  const icon = [SearchIcon, ShoppingCartIcon, CallIcon]
  const pickTwoIcons = icon.slice(0, 2)

  return (
    <div className='flex items-center'>
      {pickTwoIcons.map((img, index) => (
        <Image src={img} key={index} alt={`icon ${index + 1}`} className='w-6 h-6 mx-2' />
      ))}
      <div className="flex text-gray-500 items-center rounded-lg bg-lime-500 lg:bg-amber-400 py-4 px-3">
        {icon.slice(2).map((image, index) => (
          <Image src={image} key={index} alt={`icon ${index + 1}`} className='w-6 h-6 mx-2' />
        ))}
        <div className='hidden lg:block'>
          <p className="text-sm capitalize">call anytime</p>
          <p className="text-base">(+234) 902 627 4950</p>
        </div>
      </div>
    </div>
  )
}