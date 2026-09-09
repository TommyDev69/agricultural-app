import React from 'react'
import Image from 'next/image'
import logo from '../../image/companyLogo.png'

export default function BuyerBrand() {
  return (
    <div className="flex min-w-0 items-center">
      <div className="flex items-center">
        <Image src={logo} alt="Company Logo" width={32} height={32} className="h-8 w-8 shrink-0" />
        <span className="ml-2 hidden lg:block whitespace-nowrap text-base font-semibold text-white sm:text-lg">AgriConnect Hub</span>
      </div>
      {/* <div className="ml-3 hidden sm:block lg:hidden">
        <NavbarContactDetails />
      </div> */}
    </div>
  )
}
