'use client'

import { useState } from 'react'
import BuyerBrand from './BuyerBrand'
import BuyerContent from './BuyerContent'
import BuyerSearch from './BuyerSearch'
import BuyerNavMobile from './BuyerNavMobile'

export default function BuyerNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-20 bg-black text-white shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <div className="lg:flex lg:justify-between lg:min-h-18 lg:items-center lg:gap-6">
          <div className="flex min-h-18 items-center justify-between gap-4 py-3 lg:min-h-0 lg:shrink-0 lg:py-0">
            <BuyerBrand />
            <div className="min-w-0 flex-1 lg:hidden">
              <BuyerSearch />
            </div>
            <BuyerNavMobile
              isOpen={isMenuOpen}
              onToggle={() => setIsMenuOpen((open) => !open)}
            />
          </div>

          <div id="mobile-navigation" aria-label="Buyer navigation"
            className={`overflow-hidden border-t border-white/15 transition-[max-height,opacity,transform,padding] duration-300 ease-out motion-reduce:transition-none lg:max-h-none lg:translate-y-0 lg:border-0 lg:opacity-100 ${isMenuOpen ? 'max-h-96 translate-y-0 py-3 opacity-100' : 'pointer-events-none max-h-0 -translate-y-2 py-0 opacity-0 lg:pointer-events-auto lg:py-0'}`}
          >
            <BuyerContent />
          </div>

          <div className="hidden w-full max-w-xs lg:block">
            <BuyerSearch />
          </div>
        </div>
      </div>
    </header>
  )
}
