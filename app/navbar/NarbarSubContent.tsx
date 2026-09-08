import React from 'react'

export default function NarbarSubContent({ navbarItems }: { navbarItems: { id: number, name: string, href: string }[] }) {
  return (
    <nav className="flex w-full flex-col gap-1 lg:flex-row lg:items-center lg:gap-2">
      {navbarItems.map((item) => (
        <a key={item.id} href={item.href} className="rounded-lg px-4 py-3 text-base font-medium capitalize text-slate-700 transition hover:bg-lime-500 hover:text-white lg:text-lime-600 lg:hover:bg-lime-500">
          {item.name}
        </a>
      ))}
    </nav>
  )
}
