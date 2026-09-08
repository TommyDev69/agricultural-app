import React from 'react'
import Image from 'next/image'
import logo from '../image/companyLogo.png'
import NavbarContactDetails from './NavbarContactDetails'

export default function NavbarBrand() {
  return (
    <div className="flex min-w-0 items-center">
      <div className="flex items-center">
        <Image src={logo} alt="Company Logo" width={32} height={32} className="h-8 w-8 shrink-0" />
        <span className="ml-2 whitespace-nowrap text-base font-semibold text-gray-800 sm:text-lg">AgriConnect Hub</span>
      </div>
      <div className="ml-3 hidden sm:block lg:hidden">
        <NavbarContactDetails />
      </div>
    </div>
  )
}
