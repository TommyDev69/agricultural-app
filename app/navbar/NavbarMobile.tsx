'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import NarbarSubContent from './NarbarSubContent'

const navbarItems = [
  { id: 1, name: 'Home', href: '/' },
  { id: 2, name: 'About', href: '/about' },
  { id: 3, name: 'Products', href: '/products' },
  { id: 4, name: 'Projects', href: '/projects' },
]

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? 'Close menu' : 'Open menu'} className="rounded-md p-2 text-xl text-slate-800 transition hover:bg-slate-100">
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
      </button>
      {isOpen && (
        <div id="mobile-navigation" className="absolute inset-x-4 top-full z-30 mt-2 rounded-xl border border-slate-200 bg-white p-3 shadow-xl">
          <NarbarSubContent navbarItems={navbarItems} />
        </div>
      )}
    </div>
  )
}

export default NavbarMobile
