'use client'

import { BannerEspacios } from '@/components/BannerEspacios'
import { ContactForm } from '@/components/Form'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import Desk from '../../../assets/desk.jpg'

export default function Coworking () {
  const BANNER_TEXT = 'COWORKING'
  const BANNER_DESCRIPTION = 'Área de trabajo que permite a los profesionales compartir un mismo espacio y creaciones de networking'

  return (
    <main className='w-full h-full flex flex-col justify-center items-center'>
      <BannerEspacios
        height='h-[250px]'
        width='w-full'
        bgColor='bg-[#296675]/10'
        text={BANNER_TEXT}
        description={BANNER_DESCRIPTION}
      />
      <div className='flex flex-col w-full h-full px-[50px] 2xl:px-[90px]'>
        <section id='amenidades' className='flex flex-col w-full h-full py-[65px]'>
          <div className='w-full h-full border'>
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              interval={3000}
              autoPlay
            >
              <div className='w-full h-[216.5px] md:h-[500px] lg:h-[450px] 2xl:h-[650px]'>
                <Image
                  className='w-full h-full object-cover object-center'
                  width={1600}
                  height={1066}
                  alt=''
                  src={Desk}
                  priority
                />
                {/* <p className="legend">Legend 1</p> */}
              </div>
              <div className='w-full h-[216.5px] md:h-[500px] lg:h-[450px] 2xl:h-[650px]'>
                <Image
                  className='w-full h-full object-cover object-center'
                  width={1600}
                  height={1066}
                  alt=''
                  src={Desk}
                />
                {/* <p className="legend">Legend 2</p> */}
              </div>
              <div className='w-full h-[216.5px] md:h-[500px] lg:h-[450px] 2xl:h-[650px]'>
                <Image
                  className='w-full h-full object-cover object-center'
                  width={1600}
                  height={1066}
                  alt=''
                  src={Desk}
                />
                {/* <p className="legend">Legend 3</p> */}
              </div>
            </Carousel>
          </div>
          <div className='flex flex-col w-full justify-center items-start gap-8 text-[#142e38] mb-[50px]'>
            <p className='text-[22px]'>¿Qué incluye?</p>
            <ul>
              <li>Equipo cómodo</li>
              <li>Internet de alta velocidad</li>
              <li>Limpieza</li>
              <li>Aire acondicionado</li>
              <li>Coffee break sencillo</li>
              <li>Flextime</li>
              <li>Centro de copiado → costo extra</li>
            </ul>
            {/* <Tabs className='w-full'>
              <TabList>
                <Tab>Title 1</Tab>
                <Tab>Title 2</Tab>
              </TabList>

              <TabPanel>
                <h2>Any content 1</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </Tabs> */}
          </div>
        </section>
      </div>
      <section id='contacto' className='border-y-2 border-[#142e38] mt-[65px] w-full'>
        <ContactForm />
      </section>
    </main>
  )
}
