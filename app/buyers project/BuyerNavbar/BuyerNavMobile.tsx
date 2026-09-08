'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
export default function BuyerNavMobile() {
     const [isOpen, setIsOpen] = useState(false)
    
  return (
    <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? 'Close menu' : 'Open menu'} className="rounded-md p-2 text-xl text-slate-800 transition hover:bg-slate-100">
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
    </div>
    
  )
}
