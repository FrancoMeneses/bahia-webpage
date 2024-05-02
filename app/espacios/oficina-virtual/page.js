import { BannerEspacios } from '@/components/BannerEspacios'
import { ContactForm } from '@/components/Form'
import Image from 'next/image'
import Down from '../../../assets/down.svg'
import Wifi from '../../../assets/wifi.svg'
import Air from '../../../assets/air-conditioning.svg'
import Printer from '../../../assets/printer.svg'
import Coffee from '../../../assets/coffee.svg'
import Silla from '../../../assets/silla.svg'
import Spray from '../../../assets/spray.svg'
import Tv from '../../../assets/tv.svg'
import { CustomCarousel } from '@/components/Carousel'

export default function OficinaVirtual () {
  const BANNER_TEXT = 'OFICINA VIRTUAL'
  const BANNER_DESCRIPTION = 'Área multiusos designada donde se puede tener reuniones laborales o extraordinarias, así como también ponencias y pláticas de negocios'
  const carouselImages = [{
    image: 'https://placehold.co/600x400',
    description: 'Lugar 1'
  },
  {
    image: 'https://placehold.co/600x400',
    description: 'Lugar 2'
  },
  {
    image: 'https://placehold.co/600x400',
    description: 'Lugar 3'
  }]

  return (
    <main className='w-full h-full flex flex-col justify-center items-center'>
      <BannerEspacios
        height='h-[250px]'
        width='w-full'
        bgColor='bg-[#296675]/10'
        text={BANNER_TEXT}
        description={BANNER_DESCRIPTION}
      />
      <div className='flex flex-col w-full h-full px-[50px] 2xl:px-[90px] py-[65px]'>
        <section className='flex flex-col w-full h-full justify-center items-start gap-10'>
          <p className='text-[22px]'>¿Qué incluye?</p>
          <div className='flex w-full h-full justify-between items-start gap-8'>
            <div className='flex flex-col w-full justify-center items-start gap-8 text-[#142e38] self-start'>
              <section id='amenidades-juntas' className='w-full mx-auto'>
                <div className='overflow-hidden'>
                  {/* <!-- accordion-tab  --> */}
                  <div className='group outline-none accordion-section' tabIndex='1'>
                    <div className='group border border-[#142e38] border-b-0 rounded-t-xl flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative'>
                      <div className='text-[20px] text-center w-full group-focus:font-semibold text-[#142e38] transition ease duration-500 flex'>
                        <div className='w-full h-full flex justify-start items-center gap-4'>
                          <span className='size-auto flex justify-center items-center'>
                            <Image src={Silla} alt='Chair icon' className='size-[40px]' width='auto' />
                          </span>
                          <h2>
                            Mobiliario de oficina cómodo
                          </h2>
                        </div>
                        <span className='size-auto items-center h-full inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-0 mr-2'>
                          <Image src={Down} alt='Arrow Icon' className='size-[36px]' width='auto' />
                        </span>
                      </div>
                    </div>
                    <div className='group-focus:max-h-screen max-h-0 bg-[#296675]/10 border-x border-[#142e38] px-4 overflow-hidden ease duration-500 flex flex-col justify-center items-center'>
                      <p className='p-2 text-[#142e38] text-justify max-w-6xl'>
                        Con mobiliario ergonómico de alta calidad, desde sillas hasta escritorios, te aseguramos un entorno de trabajo cómodo y productivo.
                      </p>
                    </div>
                  </div>
                  {/* <!-- accordion-tab --> */}
                  {/* <!-- accordion-tab  --> */}
                  <div className='group outline-none accordion-section' tabIndex='2'>
                    <div className='group border border-[#142e38] border-b-0 flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative'>
                      <div className='text-[20px] text-center w-full group-focus:font-semibold text-[#142e38] transition ease duration-500 flex'>
                        <div className='w-full h-full flex justify-start items-center gap-4'>
                          <span className='size-auto flex justify-center items-center'>
                            <Image src={Wifi} alt='Wifi icon' className='size-[40px]' width='auto' />
                          </span>
                          <h2>
                            Internet de alta velocidad
                          </h2>
                        </div>
                        <span className='size-auto items-center h-full inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-0 mr-2'>
                          <Image src={Down} alt='Arrow Icon' className='size-[36px]' width='auto' />
                        </span>
                      </div>
                    </div>
                    <div className='group-focus:max-h-screen max-h-0 bg-[#296675]/10 border-x border-[#142e38] px-4 overflow-hidden ease duration-500 flex flex-col justify-center items-center'>
                      <p className='p-2 text-[#142e38] text-justify max-w-6xl'>
                        Conéctate sin interrupciones y lleva a cabo tus tareas con eficiencia gracias a nuestra conexión a Internet de alta velocidad.
                      </p>
                    </div>
                  </div>
                  {/* <!-- accordion-tab --> */}
                  {/* <!-- accordion-tab  --> */}
                  <div className='group outline-none accordion-section' tabIndex='3'>
                    <div className='group border border-[#142e38] border-b-0 flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative'>
                      <div className='text-[20px] text-center w-full group-focus:font-semibold text-[#142e38] transition ease duration-500 flex'>
                        <div className='w-full h-full flex justify-start items-center gap-4'>
                          <span className='size-auto flex justify-center items-center'>
                            <Image src={Air} alt='Air icon' className='size-[40px]' width='auto' />
                          </span>
                          <h2>
                            Espacios climatizados
                          </h2>
                        </div>
                        <span className='size-auto items-center h-full inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-0 mr-2'>
                          <Image src={Down} alt='Arrow Icon' className='size-[36px]' width='auto' />
                        </span>
                      </div>
                    </div>
                    <div className='group-focus:max-h-screen max-h-0 bg-[#296675]/10 border-x border-[#142e38] px-4 overflow-hidden ease duration-500 flex flex-col justify-center items-center'>
                      <p className='p-2 text-[#142e38] text-justify max-w-6xl'>
                        Trabaja en un ambiente cómodo y agradable durante todo el año, gracias a nuestro sistema de climatización que garantiza una temperatura óptima en todo momento.
                      </p>
                    </div>
                  </div>
                  {/* <!-- accordion-tab --> */}
                  {/* <!-- accordion-tab  --> */}
                  <div className='group outline-none accordion-section' tabIndex='3'>
                    <div className='group border border-[#142e38] border-b-0 flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative'>
                      <div className='text-[20px] text-center w-full group-focus:font-semibold text-[#142e38] transition ease duration-500 flex'>
                        <div className='w-full h-full flex justify-start items-center gap-4'>
                          <span className='size-auto flex justify-center items-center'>
                            <Image src={Printer} alt='Printer icon' className='size-[40px]' width='auto' />
                          </span>
                          <h2>
                            Centro de copiado y escaneo *
                          </h2>
                        </div>
                        <span className='size-auto items-center h-full inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-0 mr-2'>
                          <Image src={Down} alt='Arrow Icon' className='size-[36px]' width='auto' />
                        </span>
                      </div>
                    </div>
                    <div className='group-focus:max-h-screen max-h-0 bg-[#296675]/10 border-x border-[#142e38] px-4 overflow-hidden ease duration-500 flex flex-col justify-center items-center'>
                      <p className='p-2 text-[#142e38] text-justify max-w-6xl'>
                        Simplifica tus tareas administrativas con nuestro centro de copiado y escaneo.<br /> <span className='font-semibold'>*Disponible con costo extra</span>
                      </p>
                    </div>
                  </div>
                  {/* <!-- accordion-tab --> */}
                  {/* <!-- accordion-tab  --> */}
                  <div className='group outline-none accordion-section' tabIndex='5'>
                    <div className='group border border-[#142e38] border-b-0 flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative'>
                      <div className='text-[20px] text-center w-full group-focus:font-semibold text-[#142e38] transition ease duration-500 flex'>
                        <div className='w-full h-full flex justify-start items-center gap-4'>
                          <span className='size-auto flex justify-center items-center'>
                            <Image src={Coffee} alt='Coffee icon' className='size-[40px]' width='auto' />
                          </span>
                          <h2>
                            Coffee Break sencillo *
                          </h2>
                        </div>
                        <span className='size-auto items-center h-full inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-0 mr-2'>
                          <Image src={Down} alt='Arrow Icon' className='size-[36px]' width='auto' />
                        </span>
                      </div>
                    </div>
                    <div className='group-focus:max-h-screen max-h-0 bg-[#296675]/10 border-x border-[#142e38] px-4 overflow-hidden ease duration-500 flex flex-col justify-center items-center'>
                      <p className='p-2 text-[#142e38] text-justify max-w-6xl'>
                        Toma un descanso y recarga energías en nuestras áreas comunes diseñadas para el relax, donde podrás disfrutar de un café o socializar con otros miembros de la comunidad.<br /> <span className='font-semibold'>*Puede ascender a gourmet con costo extra</span>
                      </p>
                    </div>
                  </div>
                  {/* <!-- accordion-tab --> */}
                  {/* <!-- accordion-tab  --> */}
                  <div className='group outline-none accordion-section' tabIndex='6'>
                    <div className='group border border-[#142e38] border-b-0 flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative'>
                      <div className='text-[20px] text-center w-full group-focus:font-semibold text-[#142e38] transition ease duration-500 flex'>
                        <div className='w-full h-full flex justify-start items-center gap-4'>
                          <span className='size-auto flex justify-center items-center'>
                            <Image src={Tv} alt='Tv icon' className='size-[40px]' width='auto' />
                          </span>
                          <h2>
                            Televisión HD
                          </h2>
                        </div>
                        <span className='size-auto items-center h-full inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-0 mr-2'>
                          <Image src={Down} alt='Arrow Icon' className='size-[36px]' width='auto' />
                        </span>
                      </div>
                    </div>
                    <div className='group-focus:max-h-screen max-h-0 bg-[#296675]/10 border-x border-[#142e38] px-4 overflow-hidden ease duration-500 flex flex-col justify-center items-center'>
                      <p className='p-2 text-[#142e38] text-justify max-w-6xl'>
                        Con una calidad de imagen excelente, garantizamos que tus presentaciones sean impactantes y efectivas. Ya sea para proyectar gráficos, videos o documentos.
                      </p>
                    </div>
                  </div>
                  {/* <!-- accordion-tab --> */}
                  {/* <!-- accordion-tab  --> */}
                  <div className='group outline-none accordion-section' tabIndex='7'>
                    <div className='group border border-[#142e38] rounded-b-xl group-focus:rounded-none group-focus:border-b-0 flex justify-between px-4 py-3 items-center transition-all ease-out duration-500 cursor-pointer pr-10 relative'>
                      <div className='text-[20px] text-center w-full group-focus:font-semibold text-[#142e38] transition ease duration-500 flex'>
                        <div className='w-full h-full flex justify-start items-center gap-4'>
                          <span className='size-auto flex justify-center items-center'>
                            <Image src={Spray} alt='Spray icon' className='size-[40px]' width='auto' />
                          </span>
                          <h2>
                            Limpieza y mantenimiento
                          </h2>
                        </div>
                        <span className='size-auto items-center h-full inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-0 mr-2'>
                          <Image src={Down} alt='Arrow Icon' className='size-[36px]' width='auto' />
                        </span>
                      </div>
                    </div>
                    <div className='group-focus:max-h-screen max-h-0 bg-[#296675]/10 border-x group-focus:border-b border-[#142e38] rounded-b-xl px-4 overflow-hidden ease duration-500 flex flex-col justify-center items-center'>
                      <p className='p-2 text-[#142e38] text-justify max-w-6xl'>
                        Garantizamos un ambiente limpio, ordenado y seguro para que los profesionales puedan trabajar de manera productiva y cómoda.
                      </p>
                    </div>
                  </div>
                  {/* <!-- accordion-tab --> */}
                </div>
              </section>
            </div>
            <div className='w-full h-full border border-[#142e38]'>
              <CustomCarousel elements={carouselImages} />
            </div>
          </div>
        </section>
      </div>
      <section id='contacto' className='border-y-2 border-[#142e38] w-full'>
        <ContactForm />
      </section>
    </main>
  )
}