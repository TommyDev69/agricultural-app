import React from 'react'
import NavbarBrand from './NavbarBrand'
import NavbarContent from './NavbarContent'
import NavbarContactDetails from './NavbarContactDetails'
import NavbarMobile from './NavbarMobile'
export default function MainNavbar() {
  return (
    <div className="flex lg:block">
    <div className= "lg:flex lg:w-full w-[90%]  items-center-safe justify-between bg-[#ffffff] h-2w0   pl-4 lg:px-12 pwy-8 ">
        <NavbarBrand />
        <div className="dw-full">
            <NavbarContent />
        </div>
        <div className="hidden lg:block">
            <NavbarContactDetails />
        </div>
        
    </div>

    <div className="lg:hidden px-4 lg:px-12 pt-4">
        <NavbarMobile />
    
    </div>
    </div>
  )
}
