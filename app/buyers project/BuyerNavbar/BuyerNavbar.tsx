import React from 'react'
import BuyerBrand from './BuyerBrand'
import BuyerContent from './BuyerContent'
import BuyerSearch from './BuyerSearch'
import BuyerNavMobile from './BuyerNavMobile'

export default function BuyerNavbar() {
  return (
    <div className="bg-black text-white flex justify-between items-center px-10 py-2">
      <BuyerBrand />
      <BuyerContent />
      <BuyerSearch />

       <>
            <BuyerNavMobile />
        </>
    </div>
  )
}

