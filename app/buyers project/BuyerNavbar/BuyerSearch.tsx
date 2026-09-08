import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
export default function BuyerSearch() {
  return (
    <div>
        <div className="relative">
            <input  type="text" placeholder="Search..." className="w-full rounded-[10px] focus:bg-white  focus:text-black focus-within:font-bold focus:text-md border border-gray-300 py-2 pl-10 pr-3 text-sm focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
            <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

    </div>
  )
}
