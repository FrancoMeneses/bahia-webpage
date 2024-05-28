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

export const metadata = {
  title: 'Renta de Sala de Juntas en Chetumal, Quintana Roo: Espacios profesionales para reuniones exitosas',
  description: 'Encuentra salas de juntas en Chetumal, Quintana Roo. Ambientes ideales para reuniones exitosas en Bahía Business Center.',
  openGraph: {
    images: 'https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832469/Webpage/Sala%20de%20Juntas/f21htfihzjpgxr8lkcut.webp'
  }
}

export default function SalaJuntas () {
  const BANNER_TEXT = 'SALA DE JUNTAS'
  const BANNER_DESCRIPTION = 'Área multiusos designada donde se puede tener reuniones laborales o extraordinarias, así como también ponencias y pláticas de negocios'
  const carouselImages = [{
    image: 'https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832468/Webpage/Sala%20de%20Juntas/aq7dbm6akjp5bnjemrvy.webp',
    title: 'Reunión de planificación',
    description: ''
  },
  {
    image: 'https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832469/Webpage/Sala%20de%20Juntas/td9hdoig2rrc2gmeoopa.webp',
    title: 'Reunión de resultados',
    description: ''
  },
  {
    image: 'https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832469/Webpage/Sala%20de%20Juntas/f21htfihzjpgxr8lkcut.webp',
    title: 'Sala de juntas alta voz',
    description: ''
  },
  {
    image: 'https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832468/Webpage/Sala%20de%20Juntas/eef94hukbkrnnih0zib2.webp',
    title: 'Sala de juntas',
    description: ''
  },
  {
    image: 'https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832468/Webpage/Sala%20de%20Juntas/agexe4zpllp0fmx0azx0.webp',
    title: 'Trabajo en equipo',
    description: ''
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
      <div className='flex flex-col w-full h-full px-4 md:px-[50px] 2xl:px-[90px]'>
        <section id='accesos' className='flex flex-col w-full h-full py-[50px] md:py-[65px]'>
          <div className='flex flex-col w-full justify-center items-start gap-14 text-[#142e38]'>
            <div className='w-full flex flex-col justify-center items-start gap-8'>
              <p className='text-[22px]'>Contamos con 1 plan para la sala de juntas</p>
              <p className='text-[18px] font-light'>Nos adaptamos a tus necesidades</p>
            </div>
            <div className='w-full h-full flex justify-between items-center gap-10'>
              <div className='w-full md:w-[250px] h-[180px] md:h-[240px] border border-[#142e38] rounded-[10px] flex flex-col justify-start items-center text-[#142e38]'>
                <h2 className='text-[22px] bg-[#142e38] text-[#f0fbfb] w-full h-auto p-1.5 pl-2 self-start rounded-t-lg'>Acceso por hora</h2>
                <p className='p-2.5 text-[18px]'>Aprovecha al máximo cada minuto de tu tiempo, pagando solo por las horas que necesitas.</p>
              </div>
            </div>
          </div>
        </section>
        <section className='flex flex-col w-full h-full justify-center items-start gap-10'>
          <p className='text-[22px]'>¿Qué incluye?</p>
          <div className='flex flex-col w-full h-full justify-between items-start gap-10'>
            <div className='flex w-full justify-start items-start gap-8 text-[#142e38] self-start'>
              <section id='amenidades-juntas' className='w-full md:w-[65%] mx-auto'>
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
                        <div className='w-full h-full flex justify-start items-center gap-6 md:gap-4'>
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
                    <div className='group-focus:max-h-screen max-h-0 bg-[#296675]/10 border-x border-[#142e38] px-4 overflow-hidden ease duration-500 flex flex-col justify-center items-start'>
                      <p className='p-2 text-[#142e38] text-justify flex flex-col max-w-6xl'>
                        Simplifica tus tareas administrativas con nuestro centro de copiado y escaneo.<span className='font-semibold'>*Disponible con costo extra</span>
                      </p>
                    </div>
                  </div>
                  {/* <!-- accordion-tab --> */}
                  {/* <!-- accordion-tab  --> */}
                  <div className='group outline-none accordion-section' tabIndex='5'>
                    <div className='group border border-[#142e38] border-b-0 flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative'>
                      <div className='text-[20px] text-center w-full group-focus:font-semibold text-[#142e38] transition ease duration-500 flex'>
                        <div className='w-full h-full flex justify-start items-center gap-[30px] md:gap-4'>
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
                        <div className='w-full h-full flex justify-start items-center gap-[70px] md:gap-4'>
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
            <div className='w-full flex flex-col justify-center items-center gap-10'>
              <h2 className='text-[22px] self-start'>Instalaciones</h2>
              <div className='w-full md:w-[60%] h-full border border-[#142e38]'>
                <CustomCarousel elements={carouselImages} height='h-[300px] md:h-[550px]' />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section id='contacto' className='border-y-2 border-[#142e38] mt-[65px] w-full'>
        <ContactForm />
      </section>
    </main>
  )
}
