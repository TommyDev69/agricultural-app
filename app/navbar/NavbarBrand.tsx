import React from 'react'
import Image from 'next/image'
import logo from '../image/companyLogo.png'
import NavbarContactDetails from './NavbarContactDetails'
export default function NavbarBrand() {
  return (
    
<div className='flex'>
    <div className='md:w-[320px] flex items-center'>
        <Image src={logo} alt="Company Logo" width={32} height={32} />
        <span className="text-lg font-semibold text-gray-800 ml-2">AgriConnect Hub</span>

    </div>
 <div className= 'lg:hidden  mx-auto'>

    <NavbarContactDetails  />
 </div>
</div>



    
  )
}
