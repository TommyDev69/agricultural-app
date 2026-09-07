import Image, { StaticImageData } from 'next/image'
import { text } from 'stream/consumers'
export default function BackgroundInfo({ image, text }: { image: StaticImageData[], text?: string }) {
  return (
    <div className='w-136.25  flex justify-center items-center'>
       {image.map((img, index) =>(
        <Image src={img} key={index} alt={`icon ${index + 1}`} className='w-6 h-6 mx-2'/>
    ))}
    <p className="text-md font-medium text-gray-400 italic">{text}</p>
    </div>
  )
}
