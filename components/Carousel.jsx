'use client'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'

export const CustomCarousel = ({ elements, height }) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      interval={3000}
      autoPlay
    >
      {elements.map((element, i) => {
        return (
          <div key={i} className={`w-full ${height} flex justify-center items-center`}>
            <Image
              className='w-full h-full object-cover object-center'
              height='400'
              width='600'
              alt=''
              src={element.image}
              priority
            />
            <p className='absolute bottom-8 rounded-lg py-1.5 px-6 bg-[#142e38] text-[#f0fbfb]'>{element.description}</p>
          </div>
        )
      })}
    </Carousel>
  )
}
