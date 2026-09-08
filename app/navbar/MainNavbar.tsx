import React from 'react'
import NavbarBrand from './NavbarBrand'
import NavbarContent from './NavbarContent'
import NavbarContactDetails from './NavbarContactDetails'
import NavbarMobile from './NavbarMobile'

export default function MainNavbar() {
  return (
    <header className="relative bg-white shadow-sm">
      <div className="mx-auto flex min-h-18 w-full items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-12">
        <NavbarBrand />
        <div className="hidden lg:block">
          <NavbarContent />
        </div>
        <div className="hidden lg:block">
          <NavbarContactDetails />
        </div>
        <NavbarMobile />
      </div>
    </header>
  )
}
