import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function BuyerDeal() {
  return (
    <div className='flex h-full max-w-md flex-col justify-center px-6 py-8 text-left font-bold text-white sm:px-10 lg:px-12'>
        <p className='promo-copy font-bold text-sm uppercase tracking-[0.18em] sm:text-base'>best deal</p>
        <p className='promo-copy promo-copy-delay mt-2 font-extrabold text-xl uppercase leading-tight sm:text-2xl'>special product of the month</p>
        <p className='promo-copy promo-copy-delay-2 mt-1 font-extrabold text-xl uppercase leading-tight sm:text-2xl'>deal of the month</p>
        <button className="promo-button promo-copy-delay-3 mt-5 flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-lime-600 shadow-lg" type="button">
            <span>Shop now</span>
            <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
        </button>
    </div>
  )
}
