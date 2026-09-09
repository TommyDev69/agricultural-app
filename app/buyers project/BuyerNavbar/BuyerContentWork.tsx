import Link from 'next/link'
interface BuyerContentWorkProps {
    content: {
        id: number;
        name: string;
        link: string;
    }[];
}

export default function BuyerContentWork({ content }: BuyerContentWorkProps) {
  return (
    <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-2">
      {content.map((item) => (
        <li key={item.id}>
            <Link href={item.link} className="block rounded-lg px-4 py-2 text-sm font-medium capitalize text-white transition-colors hover:bg-lime-500 hover:text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400">
                {item.name}
            </Link>
        </li>
      ))}
    </ul>
  )
}
