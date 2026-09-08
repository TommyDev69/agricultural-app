import React from 'react'

export default function Activities() {
  return (
    <div className="flex w-full my-8 max-w-7xl flex-col gap-3 px-5 sm:flex-row sm:px-8 lg:px-12">
      <button className="min-h-12 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-orange-600 sm:text-base">
        Seller here
      </button>
      <button className="min-h-12 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-orange-600 sm:text-base">
        Buyer here
      </button>
    </div>
  )
}
