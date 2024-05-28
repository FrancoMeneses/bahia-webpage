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
import Camera from '../../../assets/camera.svg'
import { CustomCarousel } from '@/components/Carousel'

export const metadata = {
  title: 'Renta de Sala de Capacitación en Chetumal, Quintana Roo: Espacios ideales para formación profesional',
  description: 'Reserva tu sala de capacitación en Chetumal, Quintana Roo. Espacios equipados para eventos formativos en Bahía Business Center.',
  openGraph: {
    images: 'https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832512/Webpage/Sala%20de%20Capacitaci%C3%B3n/ch0dfrn93rfhjlo1rkw6.webp'
  }
}

export default function SalaTraining () {
  const BANNER_TEXT = 'SALA DE CAPACITACIÓN'
  const BANNER_SUBTITLE = '(TRAINING ROOM)'
  const BANNER_DESCRIPTION = 'Espacio ideal multifuncional adecuado para la impartición de  cursos, talleres, conferencias e incluso diplomados con una capacidad de hasta 16 personas'
  const carouselImages = [{
    image: 'https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832512/Webpage/Sala%20de%20Capacitaci%C3%B3n/pdytsizzgpdvfs2cimex.webp',
    title: 'Breakfast workshop',
    description: ''
  },
  {
    image: 'https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832512/Webpage/Sala%20de%20Capacitaci%C3%B3n/ch0dfrn93rfhjlo1rkw6.webp',
    title: 'Capacitación empresas',
    description: ''
  },
  {
    image: 'https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832512/Webpage/Sala%20de%20Capacitaci%C3%B3n/pflxx3to73qtrtvkwi4c.webp',
    title: 'Capacitación posgrados',
    description: ''
  },
  {
    image: 'https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832512/Webpage/Sala%20de%20Capacitaci%C3%B3n/dcmdexqnwmy0w9dyarxg.webp',
    title: 'Meeting room',
    description: ''
  },
  {
    image: 'https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832513/Webpage/Sala%20de%20Capacitaci%C3%B3n/eoncqqg3kamdlmto9bxb.webp',
    title: 'Mesa de trabajo',
    description: ''
  },
  {
    image: 'https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832513/Webpage/Sala%20de%20Capacitaci%C3%B3n/ik9borlmtkqhb0hj5dc8.webp',
    title: 'Sala de consejo',
    description: ''
  },
  {
    image: 'https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832513/Webpage/Sala%20de%20Capacitaci%C3%B3n/mgrzpscyuzlpdrkyf9zj.webp',
    title: 'Workshop room',
    description: ''
  }]

  return (
    <main className='w-full h-full flex flex-col justify-center items-center'>
      <BannerEspacios
        height='h-[250px] md:h-[350px] 2xl:h-[420px]'
        width='w-full'
        bgColor='bg-[#296675]/10'
        bgLink='https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832513/Webpage/Sala%20de%20Capacitaci%C3%B3n/mgrzpscyuzlpdrkyf9zj.webp'
        position='bg-center md:bg-[center_top_-300px]'
        text={BANNER_TEXT}
        subtitle={BANNER_SUBTITLE}
        description={BANNER_DESCRIPTION}
      />
      <div className='flex flex-col w-full h-full px-4 md:px-[50px] 2xl:px-[90px]'>
        <section id='accesos' className='flex flex-col w-full h-full py-[50px] md:py-[65px]'>
          <div className='flex flex-col w-full justify-center items-start gap-14 text-[#142e38]'>
            <div className='w-full flex flex-col justify-center items-start gap-8'>
              <p className='text-[22px]'>Contamos con 1 plan para la sala de capacitación</p>
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
            <div className='flex flex-col w-full justify-start items-start gap-8 text-[#142e38] self-start'>
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
                        <div className='w-full h-full flex justify-start items-center gap-[25px] md:gap-4'>
                          <span className='size-auto flex justify-center items-center'>
                            <Image src={Tv} alt='TV icon' className='size-[40px]' width='auto' />
                          </span>
                          <h2>
                            Televisión Ultra HD 4K
                          </h2>
                        </div>
                        <span className='size-auto items-center h-full inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-0 mr-2'>
                          <Image src={Down} alt='Arrow Icon' className='size-[36px]' width='auto' />
                        </span>
                      </div>
                    </div>
                    <div className='group-focus:max-h-screen max-h-0 bg-[#296675]/10 border-x border-[#142e38] px-4 overflow-hidden ease duration-500 flex flex-col justify-center items-center'>
                      <p className='p-2 text-[#142e38] text-justify max-w-6xl'>
                        Con una resolución incomparable y colores vivos, cada detalle de tus presentaciones cobrará vida. Impresiona a tus clientes y colaboradores con una experiencia visual inigualable que elevará el nivel de tus reuniones a un nuevo estándar de calidad.
                      </p>
                    </div>
                  </div>
                  {/* <!-- accordion-tab --> */}
                  {/* <!-- accordion-tab  --> */}
                  <div className='group outline-none accordion-section' tabIndex='7'>
                    <div className='group border border-[#142e38] border-b-0 flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative'>
                      <div className='text-[20px] text-center w-full group-focus:font-semibold text-[#142e38] transition ease duration-500 flex'>
                        <div className='w-full h-full flex justify-start items-center gap-4'>
                          <span className='size-auto flex justify-center items-center'>
                            <Image src={Camera} alt='Camera icon' className='size-[40px]' width='auto' />
                          </span>
                          <h2>
                            Cámara de alta definición y micrófono
                          </h2>
                        </div>
                        <span className='size-auto items-center h-full inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-0 mr-2'>
                          <Image src={Down} alt='Arrow Icon' className='size-[36px]' width='auto' />
                        </span>
                      </div>
                    </div>
                    <div className='group-focus:max-h-screen max-h-0 bg-[#296675]/10 border-x border-[#142e38] px-4 overflow-hidden ease duration-500 flex flex-col justify-center items-center'>
                      <p className='p-2 text-[#142e38] text-justify max-w-6xl'>
                        Con nuestra infraestructura de audio y video garantizamos una transmisión clara y fluida de tus presentaciones y talleres, te ofrecemos la herramienta perfecta para una comunicación efectiva y sin complicaciones.
                      </p>
                    </div>
                  </div>
                  {/* <!-- accordion-tab --> */}
                  {/* <!-- accordion-tab  --> */}
                  <div className='group outline-none accordion-section' tabIndex='8'>
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
              <div className='w-full md:w-[80%] min-h-full border border-[#142e38]'>
                <CustomCarousel elements={carouselImages} height='h-[268px] md:h-[550px]' />
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
