import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function BuyerSales() {
  return (
    <div className='flex h-full flex-col justify-center px-6 py-8 font-bold sm:px-10 lg:px-12'>
        <p className='promo-copy text-sm uppercase tracking-[0.18em]'>summer sales</p>
        <p className='promo-copy promo-copy-delay mt-1 text-3xl font-extrabold uppercase sm:text-4xl'>75% off</p>
        <button className="promo-button promo-copy-delay-2 mt-5 flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-lime-600 shadow-lg" type="button">
            <span>Shop now</span>
            <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
        </button>
    </div>
  )
}
