'use client'
import { useState, useEffect } from "react"
import photo_1 from '../image/activPhoto.png'
import photo_2 from '../image/sample1.avif'
import photo_3 from '../image/drone.jpg'
import photo_4 from '../image/mech.jpg'
import photo_5 from '../image/yard.avif'
// import photo_6 from '../image/palm tree.jpg'
// import photo_7 from '../image/agric.jpg'
import Caurosel from "./Caurosel"

const images = [photo_1, photo_2, photo_3, photo_4, photo_5]

const CarouselData = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000) // change slide every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <>
         <Caurosel current={current} images={images} />
       
    </>
  )
}

export default CarouselData