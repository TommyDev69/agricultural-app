'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
interface BuyerContentWorkProps {
    content: {
        id: number;
        name: string;
        link: string;
    }[];
}

export default function BuyerContentWork({ content }: BuyerContentWorkProps) {
    const [isOpen, setIsOpen] = useState<number | null>(null);

    const handleToggle = (id: number) => {
        setIsOpen(isOpen === id ? null : id);
    }
  return (
    <div className="flex space-x-4">
      {content.map((item) => (
        <div key = {item.id} className=" ">
            <div className="flex items-center  hover:bg-lime-500 hover:rounded-xl p-4" onClick={() => handleToggle(item.id)}>
                <p className="text-sm text-white hover:text-gray-900 px-3 py-2 rounded-md font-medium capitalize">
                    {item.name}
                </p>
                <FontAwesomeIcon icon={isOpen === item.id ? faChevronDown : faChevronUp} className="ml-1 h-4 w-4" />
            </div>
        </div>
      ))}
    </div>
  )
}
