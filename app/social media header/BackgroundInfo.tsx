import Image, { StaticImageData } from 'next/image'

export default function BackgroundInfo({ image, text }: { image: StaticImageData[], text?: string }) {
  return (
    <div className="mx-auto flex min-h-11 max-w-7xl items-center justify-center gap-1 px-4 py-2 sm:justify-start sm:px-6 lg:px-12">
      <div className="flex shrink-0">
        {image.map((img, index) => (
          <Image src={img} key={index} alt={`Social media link ${index + 1}`} className="mx-1 h-4 w-4 sm:h-5 sm:w-5" />
        ))}
      </div>
      {text && <p className="truncate text-xs font-medium italic text-gray-500 sm:text-sm">{text}</p>}
    </div>
  )
}
