'use client'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import Lightbox from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import NextJsImage from './nextImage'
import { useState } from 'react'

export const CustomCarousel = ({ elements, height }) => {
  const [open, setOpen] = useState(false)
  const [indexState, setIndexState] = useState(1)
  const lightboxA = elements.map(element => {
    return {
      src: element.image,
      title: element.title,
      description: element.description
    }
  })

  const handleSlide = (index, item) => {
    setIndexState(index)
    setOpen(true)
  }

  return (
    <>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        interval={3000}
        autoPlay
        onClickItem={handleSlide}
      >
        {elements.map((element, i) => {
          return (
            <div key={i} className={`w-full ${height} flex justify-center items-center cursor-pointer`}>
              <Image
                className='w-full h-full object-cover object-center'
                height='400'
                width='600'
                alt=''
                src={element.image}
                priority
              />
              <p className='absolute bottom-8 rounded-lg py-1.5 px-6 bg-[#142e38] text-[#f0fbfb]'>{element.title}</p>
            </div>
          )
        })}
      </Carousel>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={lightboxA}
        render={{ slide: NextJsImage, thumbnail: NextJsImage }}
        counter={{ container: { style: { top: 'unset', bottom: 0, left: '80%' } } }}
        index={indexState}
        plugins={[Thumbnails, Captions, Counter]}
      />
    </>
  )
}
